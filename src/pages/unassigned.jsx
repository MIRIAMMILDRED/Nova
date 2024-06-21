import React, { useState, useEffect } from 'react';
import {
  Button,
  Checkbox,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { CiSearch } from 'react-icons/ci';
import Header from './header';
import SideBar from './sideBar';
import userDetails from '../utils/data/userdetails.json';
import axios from 'axios';

const Unassigned = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [agents, setAgents] = useState([]);
  const [agentSearchTerm, setAgentSearchTerm] = useState('');

  useEffect(() => {
    const fetchAndSetAgents = async () => {
      try {
        const response = await axios.get('https://novaend.azurewebsites.net/api/team/query');
        setAgents(response.data);
      } catch (error) {
        console.error('Error fetching agents:', error);
      }
    };

    fetchAndSetAgents();
  }, []);

  const handleAssignClick = (ticket) => {
    setSelectedTicket(ticket);
    onOpen();
  };

  const handleAssignAgent = async (agent) => {
    try {
      const response = await axios.put('https://novaend.azurewebsites.net/api/tickets/assign', {
        ticketId: selectedTicket.id, // Make sure this is the correct ID of the selected ticket
        agentId: agent._id, // Assuming agent._id is the MongoDB ObjectId
      });
      console.log(response.data); // Log the response from the backend
      onClose(); // Close the modal after assignment
      // Optionally, you may want to update the UI to reflect the assigned agent immediately
    } catch (error) {
      console.error('Error assigning agent:', error);
      // Handle error state or notification if needed
    }
  };

  const filteredTickets = userDetails.users.filter((user) =>
    user.id.toString().includes(searchTerm) ||
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredAgents = agents.filter((agent) =>
    agent.name.toLowerCase().includes(agentSearchTerm.toLowerCase())
  );

  return (
    <div className="flex  bg-white">
      <SideBar />
      <div className="flex-grow flex flex-col">
        <Header />
        <div className="p-6 bg-white flex-grow overflow-auto">
          <div className="my-4 mb-10">
            <h3 className="text-2xl font-semibold text-[#3a404b]">Unassigned Tickets</h3>
            <p className="flex gap-8 text-[#4b5260]">Summary</p>
          </div>
          <InputGroup mb="4">
            <InputLeftElement pointerEvents="none">
              <CiSearch color="gray.300" />
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search by ticket ID, requester, subject, or status..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </InputGroup>
          <Grid
            templateColumns="repeat(6, 1fr)"
            textColor="#757B88"
            m="6"
            mb="0"
            rounded="lg"
            boxShadow="lg"
            className="divide-x-2 divide-[#757b88]"
          >
            <GridItem bg="blue.100" h="10" w="100%" p="2" textAlign="center">
              Requester
            </GridItem>
            <GridItem bg="blue.100" h="10" w="100%" p="2" textAlign="center">
              Ticket ID
            </GridItem>
            <GridItem bg="blue.100" h="10" w="100%" p="2" textAlign="center">
              Subject
            </GridItem>
            <GridItem bg="blue.100" h="10" w="100%" p="2" textAlign="center">
              Type
            </GridItem>
            <GridItem bg="blue.100" h="10" w="100%" p="2" textAlign="center">
              Status
            </GridItem>
            <GridItem bg="blue.100" h="10" w="100%" p="2" textAlign="center">
              Agent
            </GridItem>
          </Grid>

          <Grid templateColumns="repeat(6, 1fr)" textColor="#757B88" m="6">
            {filteredTickets.map((user) => (
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
                  <img src="images/Ellipse-icon.png" alt="type icon" />
                  {user.type}
                </GridItem>
                <GridItem
                  h="10"
                  w="100%"
                  borderBottom="1px solid #eeeff0"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button size="xs">{user.status}</Button>
                </GridItem>
                <GridItem
                  h="10"
                  w="100%"
                  borderBottom="1px solid #eeeff0"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Button
                    size="sm"
                    bg="blue.500"
                    color="white"
                    _hover={{ bg: "blue.600" }}
                    onClick={() => handleAssignClick(user)}
                  >
                    Assign
                  </Button>
                </GridItem>
              </React.Fragment>
            ))}
          </Grid>

          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Assign Ticket</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <h3 className="text-md text-[#3A404B] font-semibold">Assign to</h3>
                <InputGroup mb="4">
                  <InputLeftElement pointerEvents="none">
                    <CiSearch color="gray.300" />
                  </InputLeftElement>
                  <Input
                    type="text"
                    placeholder="Search agents by name..."
                    value={agentSearchTerm}
                    onChange={(e) => setAgentSearchTerm(e.target.value)}
                  />
                </InputGroup>

                {filteredAgents.map((agent, index) => (
                  <div
                    key={agent._id} // Ensure this is the correct key (agent._id if using MongoDB)
                    className="flex items-center gap-2 mb-2 cursor-pointer hover:bg-gray-100 p-2 rounded-lg"
                    onClick={() => handleAssignAgent(agent)}
                  >
                    <img
                      className="w-8 h-8 rounded-full"
                      src={`https://i.pravatar.cc/150?img=${index + 1}`}
                      alt={agent.name}
                    />
                    <div>
                      <p className="text-sm font-medium text-gray-700">{agent.name}</p>
                      <p className="text-xs text-gray-500">{agent.status}</p>
                    </div>
                  </div>
                ))}
              </ModalBody>
              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Unassigned;
``
