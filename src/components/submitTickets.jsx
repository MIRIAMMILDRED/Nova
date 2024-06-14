
import React, { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  VStack,
  Heading,
  Text,
  useToast,
  Stack,
} from '@chakra-ui/react';

const SubmitTicketForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    ticketId: '',
    subject: '',
    type: '',
    status: '',
    agent: ''
  });

  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: 'Ticket Submitted',
      description: `Ticket for ${formData.subject} has been submitted.`,
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
    setFormData({
      name: '',
      ticketId: '',
      subject: '',
      type: '',
      status: '',
      agent: ''
    });
  };

  return (
    <Box p={8} bg="gray.50" maxW="md" mx="auto" mt={10} boxShadow="lg" borderRadius="md">
      <Heading as="h2" size="lg" textAlign="center" mb={6}>
        Submit a Ticket
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              focusBorderColor="blue.500"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Ticket ID</FormLabel>
            <Input
              name="ticketId"
              value={formData.ticketId}
              onChange={handleChange}
              placeholder="Enter ticket ID"
              focusBorderColor="blue.500"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Subject</FormLabel>
            <Input
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Enter subject"
              focusBorderColor="blue.500"
            />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Type</FormLabel>
            <Select
              name="type"
              value={formData.type}
              onChange={handleChange}
              placeholder="Select type"
              focusBorderColor="blue.500"
            >
              <option value="Bug">Bug</option>
              <option value="Support">Support</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Status</FormLabel>
            <Select
              name="status"
              value={formData.status}
              onChange={handleChange}
              placeholder="Select status"
              focusBorderColor="blue.500"
            >
              <option value="Open">Open</option>
              <option value="Closed">Closed</option>
              <option value="In Progress">In Progress</option>
            </Select>
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Agent</FormLabel>
            <Input
              name="agent"
              value={formData.agent}
              onChange={handleChange}
              placeholder="Enter agent name"
              focusBorderColor="blue.500"
            />
          </FormControl>
          <Button type="submit" colorScheme="blue" width="full">
            Submit
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default SubmitTicketForm;
