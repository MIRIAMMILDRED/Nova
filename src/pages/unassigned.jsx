/* eslint-disable react/jsx-key */
import Header from "../pages/header";
import SideBar from "../pages/sideBar";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
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
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { TbFilterSearch } from "react-icons/tb";
import userDetails from "../utils/data/userdetails.json";
import { BiMessageSquareDetail } from "react-icons/bi";
import newAgents from "../utils/data/newagents.json";

const Unassigned = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="border-r-2 border-[c9ccd1] w-1/5 float-left mr-4">
        <SideBar />
      </div>
      <div className="mt-8 pl-4 flex justify-between items-center">
        <h3 className="font-semibold">Assigned Tickets</h3>
        <div className="inline-block gap-4">
          <InputGroup>
            <InputLeftElement>
              <CiSearch />
            </InputLeftElement>
            <Input placeholder="Search for ticket..." width="100" />
          </InputGroup>

          <InputGroup marginRight={10}>
            <InputLeftElement>
              <TbFilterSearch />
            </InputLeftElement>
            <Input placeholder="Filter" width="40" />
          </InputGroup>
        </div>
      </div>

      <div>
        <Grid
          templateColumns="repeat(6, 1fr)"
          textColor="#757B88"
          m="6"
          mb="0"
          rounded="lg"
          boxShadow="lg"
          className="divide-x-2 divide-[#757b88]"
        >
          <GridItem bg="#eeeff0" h="10" w="100%" p="2" textAlign="center">
            Requester
          </GridItem>
          <GridItem bg="#eeeff0" h="10" w="100%" p="2" textAlign="center">
            Ticket ID
          </GridItem>
          <GridItem bg="#eeeff0" h="10" w="100%" p="2" textAlign="center">
            Subject
          </GridItem>
          <GridItem bg="#eeeff0" h="10" w="100%" p="2" textAlign="center">
            Type
          </GridItem>
          <GridItem bg="#eeeff0" h="10" w="100%" p="2" textAlign="center">
            Status
          </GridItem>
          <GridItem bg="#eeeff0" h="10" w="100%" p="2" textAlign="center">
            Agent
          </GridItem>
        </Grid>

        <Grid templateColumns="repeat(6, 1fr)" textColor="#757B88" m="6">
          {userDetails.users.map((user) => {
            if (user.agent == "None") {
              return (
                <>
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
                    <img src=".\public\images\Ellipse-icon.png" />
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
        
                        {newAgents.agents.map((agent) => {
                            return(
                                <div className="flex gap-2 mb-2 mt-4">
                                  <img src={agent.src}/>
                                  <p>{agent.name}</p>
                                </div>
                            )
                        })}
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </>
              );
            }
          })}
        </Grid>
      </div>
    </div>
  );
};

export default Unassigned;
