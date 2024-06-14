import DashboardHeader from "../components/dashHeader";
import SideNav from "../components/sidenav";
import {
  Stack,
  Box,
  StackDivider,
  Grid,
  GridItem,
  Button,
  Progress,
} from "@chakra-ui/react";

const TeamPerformance = () => {
  const WorkerDetails = [
    {
      name: "John Micheal",
      email: "john@creative-tim.com",
      position: "Support Agent",
      role: "Organization",
      status: "ONLINE",
      performance: "60%",
      src: "./public/images/john-image.png",
    },
    {
      name: "Richard Gran",
      email: "richard@creative-tim.com",
      position: "Manager",
      role: "Executive",
      status: "ONLINE",
      performance: "0%",
      src: "./public/images/gran-image.png",
    },
    {
      name: "Laurent Perrier",
      email: "laurent@creative-tim.com",
      position: "Executive",
      role: "Organization",
      status: "OFFLINE",
      performance: "100%",
      src: "./public/images/laurent-image.png",
    },
    {
      name: "Michael Levi",
      email: "michael@creative-tim.com",
      position: "Support Agent",
      role: "Organization",
      status: "ONLINE",
      performance: "80%",
      src: "./public/images/levi-image.png",
    },
    {
      name: "Richard Gran",
      email: "john@creative-tim.com",
      position: "Support Agent",
      role: "Organization",
      status: "OFFLINE",
      performance: "60%",
      src: "./public/images/gran-image.png",
    },
  ];

  return (
    <div>
      <div>
        <DashboardHeader />
      </div>
      <div className="border-r-2 border-[c9ccd1] w-1/5 float-left mr-4">
        <SideNav />
      </div>
      <div>
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
          w="70%"
          direction={["column", "row"]}
          spacing="24px"
        >
          {/* BOX ONE */}
          <Box
            w="30%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="4"
          >
            <img src=".\public\images\customers-icon.png" alt="customer" />
            <div className="flex flex-col gap-2">
              <p className="#acacac">Total customers</p>
              <h3 className="font-semibold text-xl">423</h3>
              <div className="flex">
                <img
                  src=".\public\images\blue-arrow-icon.png"
                  alt="blue-arrow-up"
                />
                <span className="text-[#007bff]">16% </span> this month
              </div>
            </div>
          </Box>

          {/* BOX TWO */}
          <Box
            w="30%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="4"
          >
            <img src=".\public\images\teammates-icon.png" alt="customer" />
            <div className="flex flex-col gap-2">
              <p className="#acacac">Teammates</p>
              <h3 className="font-semibold text-xl">20</h3>
              <div className="flex">
                <img
                  src=".\public\images\blue-arrow-icon.png"
                  alt="blue-arrow-up"
                />
                <span className="text-[#007bff]">16% </span> this month
              </div>
            </div>
          </Box>
          {/* BOX THREE */}
          <Box
            w="30%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            gap="4"
          >
            <img src=".\public\images\customers-icon.png" alt="customer" />
            <div className="flex flex-col gap-2">
              <p className="#acacac">Active now</p>
              <h3 className="font-semibold text-xl">08</h3>
            </div>
          </Box>
        </Stack>
        {/* END OF BOX THREE */}

        <Grid
          templateColumns="repeat(4, 1fr)"
          textColor="#757B88"
          m="6"
          mb="0"
          rounded="lg"
          boxShadow="md"
          backgroundColor="#ffffff"
        >
          <GridItem h="10" w="100%" p="2" textAlign="start">
            NAME
          </GridItem>
          <GridItem h="10" w="100%" p="2">
            ROLE
          </GridItem>
          <GridItem h="10" w="100%" p="2">
            STATUS
          </GridItem>
          <GridItem h="10" w="100%" p="2">
            PERFORMANCE
          </GridItem>
        </Grid>

        <Grid templateColumns="repeat(4, 1fr)" textColor="#757B88" m="6">
          {WorkerDetails.map((worker) => {
            return (
              <>
                {/* NAMES */}
                <GridItem
                  p="2"
                  display="flex"
                  justifyContent="flex-start"
                  alignItems="center"
                  gap="2"
                >
                  <img alt="image" src={worker.src} />
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
                <GridItem>
                <button
                    className={` p-2 px-2 rounded-md ${
                      worker.status == "ONLINE"
                        ? "bg-[#00B08766] text-[#00B08766]"
                        : "bg-[#eeeff0]"
                    }`}
                  >
                    {worker.status}
                  </button>
                  {/* <Button>{worker.status}</Button> */}
                </GridItem>

                {/* PERFORMANCE */}
                <GridItem display="flex gap-2">
                  <p>{worker.performance}</p>
                  <Progress colorScheme="teal" w="70%" size="xs" rounded="xl" value={Number(worker.performance.slice(0, -1))} />
                </GridItem>
              </>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default TeamPerformance;
