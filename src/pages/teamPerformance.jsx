import React from 'react';
import Header from './header';
import Sidebar from './sideBar';
import {
  Stack,
  Box,
  StackDivider,
  Grid,
  GridItem,
  Progress,
} from '@chakra-ui/react';

const TeamPerformance = () => {
  const WorkerDetails = [
    {
      name: 'John Micheal',
      email: 'john@creative-tim.com',
      position: 'Support Agent',
      role: 'Organization',
      status: 'ONLINE',
      performance: '60%',
      src: 'images/john-image.png',
    },
    {
      name: 'Richard Gran',
      email: 'richard@creative-tim.com',
      position: 'Manager',
      role: 'Executive',
      status: 'ONLINE',
      performance: '0%',
      src: 'images/gran-image.png',
    },
    {
      name: 'Laurent Perrier',
      email: 'laurent@creative-tim.com',
      position: 'Executive',
      role: 'Organization',
      status: 'OFFLINE',
      performance: '100%',
      src: 'images/laurent-image.png',
    },
    {
      name: 'Michael Levi',
      email: 'michael@creative-tim.com',
      position: 'Support Agent',
      role: 'Organization',
      status: 'ONLINE',
      performance: '80%',
      src: 'images/levi-image.png',
    },
    {
      name: 'Richard Gran',
      email: 'john@creative-tim.com',
      position: 'Support Agent',
      role: 'Organization',
      status: 'OFFLINE',
      performance: '60%',
      src: 'images/gran-image.png',
    },
  ];

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-500 via-green-500 to-purple-500">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Header />
        <div className="p-6 bg-white flex-grow overflow-auto h-16" >
          <div className="my-4 mb-10">
            <h3 className="text-2xl font-semibold text-[#3a404b]">
              Team Performance
            </h3>
            <p className="flex gap-8 text-[#4b5260]">Summary</p>
          </div>

          <Stack
            divider={<StackDivider borderColor="gray.200" />}
            border="1px #c9ccd1 solid"
            borderRadius="3xl"
            py="6"
            px="8"
            w="100%"
            direction={["column", "row"]}
            spacing="24px"
            className="mb-6"
          >
            {/* BOX ONE */}
            <Box
              flex="1"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="4"
            >
              <img src="images/customers-icon.png" alt="customer" />
              <div className="flex flex-col gap-2">
                <p className="text-gray-600">Total customers</p>
                <h3 className="font-semibold text-xl">423</h3>
                <div className="flex items-center">
                  <img
                    src="images/blue-arrow-icon.png"
                    alt="blue-arrow-up"
                  />
                  <span className="text-[#007bff] ml-1">16% </span> this month
                </div>
              </div>
            </Box>

            {/* BOX TWO */}
            <Box
              flex="1"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="4"
            >
              <img src="images/teammates-icon.png" alt="teammates" />
              <div className="flex flex-col gap-2">
                <p className="text-gray-600">Teammates</p>
                <h3 className="font-semibold text-xl">20</h3>
                <div className="flex items-center">
                  <img
                    src="images/blue-arrow-icon.png"
                    alt="blue-arrow-up"
                  />
                  <span className="text-[#007bff] ml-1">16% </span> this month
                </div>
              </div>
            </Box>

            {/* BOX THREE */}
            <Box
              flex="1"
              display="flex"
              justifyContent="center"
              alignItems="center"
              gap="4"
            >
              <img src="images/customers-icon.png" alt="active-now" />
              <div className="flex flex-col gap-2">
                <p className="text-gray-600">Active now</p>
                <h3 className="font-semibold text-xl">08</h3>
              </div>
            </Box>
          </Stack>
          {/* END OF STACK */}

          <Grid
            templateColumns="repeat(4, 1fr)"
            textColor="#757B88"
            m="6"
            mb="0"
            rounded="lg"
            boxShadow="md"
            backgroundColor="#ffffff"
          >
            <GridItem h="10" w="100%" p="2" textAlign="start" fontWeight="bold">
              NAME
            </GridItem>
            <GridItem h="10" w="100%" p="2" fontWeight="bold">
              ROLE
            </GridItem>
            <GridItem h="10" w="100%" p="2" fontWeight="bold">
              STATUS
            </GridItem>
            <GridItem h="10" w="100%" p="2" fontWeight="bold">
              PERFORMANCE
            </GridItem>
          </Grid>

          <Grid templateColumns="repeat(4, 1fr)" textColor="#757B88" m="6">
            {WorkerDetails.map((worker, index) => (
              <React.Fragment key={index}>
                {/* NAME */}
                <GridItem
                  p="2"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                  gap="2"
                >
                  <img alt="image" src={worker.src} className="w-10 h-10 rounded-full" />
                  <div className="flex flex-col">
                    <h3 className="text-[#3a404b] font-semibold">
                      {worker.name}
                    </h3>
                    <p className="text-sm">{worker.email}</p>
                  </div>
                </GridItem>

                {/* POSITION */}
                <GridItem display="flex" flexDir="column">
                  <h3 className="text-[#3a404b] font-semibold">
                    {worker.position}
                  </h3>
                  <p className="text-sm">{worker.role}</p>
                </GridItem>

                {/* STATUS */}
                <GridItem display="flex" justifyContent="center" alignItems="center">
                  <span
                    className={`p-2 px-2 rounded-md text-white ${
                      worker.status === 'ONLINE'
                        ? 'bg-green-500'
                        : 'bg-red-500'
                    }`}
                  >
                    {worker.status}
                  </span>
                </GridItem>

                {/* PERFORMANCE */}
                <GridItem display="flex" gap="2" alignItems="center">
                  <p>{worker.performance}</p>
                  <Progress
                    colorScheme="teal"
                    w="70%"
                    size="xs"
                    rounded="xl"
                    value={Number(worker.performance.slice(0, -1))}
                  />
                </GridItem>
              </React.Fragment>
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default TeamPerformance;
