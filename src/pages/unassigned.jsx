// eslint-disable-next-line no-unused-vars
import React from 'react';
import Header from './header';
import SideBar from './sideBar';
import { Input, InputGroup, InputLeftElement } from '@chakra-ui/input';
import {
  Grid,
  GridItem,
  Checkbox,
  Button,
  Popover,
  PopoverContent,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverTrigger,
} from '@chakra-ui/react';
import { CiSearch } from 'react-icons/ci';
// eslint-disable-next-line no-unused-vars
import { TbFilterSearch } from 'react-icons/tb';
import userDetails from '../utils/data/userdetails.json';
import { BiMessageSquareDetail } from 'react-icons/bi';
import newAgents from '../utils/data/newagents.json';

const Unassigned = () => {
  return (
    <div className="flex h-screen">
      <SideBar />
      <div className="flex-grow flex flex-col">
        <Header />
        <div className="p-6 bg-white flex-grow overflow-auto">
          <div className="my-4 mb-10">
            <h3 className="text-2xl font-semibold text-[#3a404b]">Unassigned Tickets</h3>
            <p className="flex gap-8 text-[#4b5260]">Summary</p>
          </div>

          <div className="flex mb-6 gap-4">
            <InputGroup>
              <InputLeftElement>
                <CiSearch />
              </InputLeftElement>
              <Input
                type="text"
                placeholder="Search for ticket..."
                className="border border-gray-300 rounded-lg p-2 w-full"
              />
            </InputGroup>
            <Button leftIcon={<TbFilterSearch />} colorScheme="blue">
              Filter
            </Button>
          </div>

          <Grid
            templateColumns="repeat(6, 1fr)"
            textColor="#757B88"
            m="6"
            mb="0"
            rounded="lg"
            boxShadow="lg"
            className="divide-x-2 divide-[#757b88]"
          >
            <GridItem className="bg-blue-100 h-10 w-full p-2 text-center">
              Requester
            </GridItem>
            <GridItem className="bg-blue-100 h-10 w-full p-2 text-center">
              Ticket ID
            </GridItem>
            <GridItem className="bg-blue-100 h-10 w-full p-2 text-center">
              Subject
            </GridItem>
            <GridItem className="bg-blue-100 h-10 w-full p-2 text-center">
              Type
            </GridItem>
            <GridItem className="bg-blue-100 h-10 w-full p-2 text-center">
              Status
            </GridItem>
            <GridItem className="bg-blue-100 h-10 w-full p-2 text-center">
              Agent
            </GridItem>
          </Grid>

          <Grid templateColumns="repeat(6, 1fr)" textColor="#757B88" m="6">
            {userDetails.users.map((user) => {
              if (user.agent === 'None') {
                return (
                  <React.Fragment key={user.id}>
                    <GridItem
                      h="10"
                      w="100%"
                      borderBottom="1px solid #eeeff0"
                      borderLeft="1px solid #eeeff0"
                      display="flex"
                      justifyContent="start"
                      alignItems="center"
                      gap="4"
                      pl="2"
                    >
                      <Checkbox size="md" />
                      {user.name}
                    </GridItem>
                    <GridItem
                      h="10"
                      w="100%"
                      borderBottom="1px solid #eeeff0"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      {user.id}
                    </GridItem>
                    <GridItem
                      h="10"
                      w="100%"
                      borderBottom="1px solid #eeeff0"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      {user.subject}
                    </GridItem>
                    <GridItem
                      h="10"
                      w="100%"
                      borderBottom="1px solid #eeeff0"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      gap="4"
                    >
                      <img src="/images/Ellipse-icon.png" alt="type icon" />
                      {user.type}
                    </GridItem>
                    <GridItem
                      h="10"
                      w="100%"
                      borderBottom="1px solid #eeeffo"
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                    >
                      <Button size="xs">{user.status}</Button>
                    </GridItem>
                    <Popover>
                      <PopoverTrigger>
                        <GridItem
                          h="10"
                          w="100%"
                          borderBottom="1px solid #eeeff0"
                          borderRight="1px solid #eeeff0"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          {user.agent}
                        </GridItem>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverCloseButton />
                        <PopoverHeader display="flex" alignItems="center" gap={2}>
                          <BiMessageSquareDetail />
                          <h3 className="text-md text-[#3A404B] font-semibold">Support</h3>
                        </PopoverHeader>
                        <PopoverBody>
                          <h3 className="text-md text-[#3A404B] font-semibold">Assign to</h3>
                          <InputGroup>
                            <InputLeftElement>
                              <CiSearch />
                            </InputLeftElement>
                            <Input size="sm" />
                          </InputGroup>

                          {newAgents.agents.map((agent) => (
                            <div key={agent.id} className="flex gap-2 mb-2 mt-4">
                              <img src={agent.src} alt={agent.name} />
                              <p>{agent.name}</p>
                            </div>
                          ))}
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </React.Fragment>
                );
              }
            })}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default Unassigned;
