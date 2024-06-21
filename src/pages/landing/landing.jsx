/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from "react";
import "./landing.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faComments,
  faChartLine,
  faTicketAlt,
  faUsers,
  faCodeBranch,
} from "@fortawesome/free-solid-svg-icons";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Stack,
  CardFooter,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Divider,
} from "@chakra-ui/react";
import { PiSparkle } from "react-icons/pi";
import { FaCheckCircle } from "react-icons/fa";

const useIntersectionObserver = (elementRef, callback, options) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
        }
      });
    }, options);

    const element = elementRef.current;
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [elementRef, callback, options]);
};

const HeroSection = () => {
  useEffect(() => {
    const customerText = document.getElementById("customer");
    const backgroundSvg = document.getElementById("background-svg");
    const blueCurveSvg = document.getElementById("blue-curve-svg");

    customerText.style.animation = "moveIn 2s ease-in-out forwards";
    backgroundSvg.style.animation = "fadeIn 2s ease-in-out forwards";
    blueCurveSvg.style.animation = "fadeIn 2s ease-in-out forwards";
  }, []);

  return (
    <section className="hero py-20 bg-gray-50 flex justify-center items-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex items-center space-x-8 relative z-10">
        <div className="text-content text-center md:text-left md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Provide exceptional{" "}
            <span id="customer" className="text-blue-600">
              customer
            </span>{" "}
            support with a system designed for speed and simplicity.
          </h1>
          <p className="text-lg text-gray-700 mb-8">
            Enjoy smooth and efficient issue resolution with our ticketing
            system, crafted to improve customer satisfaction and simplify your
            support processes.
          </p>
          <div className="cta-buttons flex justify-center md:justify-start space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded transition hover:bg-blue-700">
            <a href="./signup"> Sign up for free</a>
            </button>
            <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded transition hover:bg-gray-100">
            <a href="./demo"> Request Demo</a>
            </button>
          </div>
        </div>
        <div className="image-content relative w-1/2">
          <img
            src="/images/landing-one.png"
            alt="Customer Support Graphic"
            className="w-full h-auto"
          />
        </div>
      </div>
      <svg
        id="background-svg"
        className="absolute top-0 left-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f0f4f8"
          fillOpacity="1"
          d="M0,64L48,96C96,128,192,192,288,218.7C384,245,480,235,576,213.3C672,192,768,160,864,165.3C960,171,1056,213,1152,218.7C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
      </svg>
      <svg
        id="blue-curve-svg"
        className="absolute bottom-0 right-0 w-full h-auto"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#93c5fd"
          fillOpacity="1"
          d="M0,288L40,280C80,272,160,256,240,250.7C320,245,400,256,480,240C560,224,640,192,720,186.7C800,181,880,203,960,213.3C1040,224,1120,224,1200,240C1280,256,1360,288,1400,304L1440,320L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
        ></path>
      </svg>
    </section>
  );
};

const FeaturesSection = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useIntersectionObserver(
    imageRef,
    (element) => {
      element.classList.add("visible");
    },
    { threshold: 0.1 }
  );

  useIntersectionObserver(
    textRef,
    (element) => {
      element
        .querySelectorAll("h2, p, button")
        .forEach((el) => el.classList.add("visible"));
    },
    { threshold: 0.1 }
  );

  return (
    <section className="features py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex items-center space-x-8 relative z-10">
        <div className="image-content w-1/2 pr-8 flex justify-center">
          <img
            ref={imageRef}
            src="/images/landing-two.png"
            alt="Feature Graphic"
            className="max-w-xs rounded transition-transform duration-500"
          />
        </div>
        <div ref={textRef} className="text-content w-1/2 pl-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 relative">
            Our Exceptional Features
            <svg
              className="blue-curve"
              viewBox="0 0 200 20"
              preserveAspectRatio="none"
            >
              <path
                d="M0 15 Q50 5, 100 15 T200 15"
                fill="transparent"
                stroke="#1e90ff"
                strokeWidth="4"
              />
            </svg>
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We offer a variety of interesting features that can help increase
            your productivity at work and manage your project easily.
          </p>
          <div className="cta-buttons flex justify-center space-x-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded transition hover:bg-blue-700">
            <a href="./signup"> Sign up for free</a>
            </button>
            <button className="bg-white text-blue-600 border border-blue-600 px-6 py-3 rounded transition hover:bg-gray-100">
            <a href="./demo"> Request Demo</a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const UnifiedAndMultichannelSection = () => {
  return (
    <section className="combined-section py-20 relative bg-[#eff6ff]">
      {/* Decorative SVG */}
      <svg
        className="absolute top-0 left-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#93c5fd"
          fillOpacity="1"
          d="M0,160L48,186.7C96,213,192,267,288,272C384,277,480,235,576,208C672,181,768,171,864,186.7C960,203,1056,245,1152,250.7C1248,256,1344,224,1392,208L1440,192V320H0Z"
        ></path>
      </svg>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        <div className="content px-4 md:px-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Unified Dashboard
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Access comprehensive views of customer interactions, ticket
            statuses, and team performance. Customize the dashboard to fit your
            workflow, ensuring all critical information is at your fingertips
            for quick and informed decision-making.
          </p>
          <a href="#" className="text-blue-600 hover:underline">
            Learn more →
          </a>
        </div>
        <div className="image px-4 md:px-0 flex justify-center">
          <img
            src="/images/seamless image.png"
            alt="Unified Dashboard"
            className="rounded shadow-lg w-full h-auto max-h-64 object-contain md:mx-0"
            onError={(e) => (e.target.src = "/images/fallback-image.png")}
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12 relative z-10">
        <div className="image order-2 md:order-1 px-4 md:px-0 flex justify-center">
          <img
            src="/images/multichannel image.png"
            alt="Multichannel Support"
            className="rounded shadow-lg w-full h-auto max-h-64 object-contain md:mx-0"
            onError={(e) => (e.target.src = "/images/fallback-image.png")}
          />
        </div>
        <div className="content order-1 md:order-2 px-4 md:px-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Multichannel Support
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Engage with your customers wherever they are. Nova offers seamless
            multichannel support, allowing you to manage communications across
            email, social media, live chat, and more from a single platform.
          </p>
          <a href="#" className="text-blue-600 hover:underline">
            Learn more →
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12 relative z-10">
        <div className="content px-4 md:px-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Seamless Ticket Management
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Streamline your customer service process with NOVA's robust Ticket
            Management system. Easily organize, prioritize, and track customer
            inquiries from submission to resolution, ensuring nothing slips
            through the cracks.
          </p>
          <a href="#" className="text-blue-600 hover:underline">
            Learn more →
          </a>
        </div>
        <div className="image px-4 md:px-0 flex justify-center">
          <img
            src="/images/seamless-ticket.png"
            alt="Unified Dashboard"
            className="rounded shadow-lg w-full h-auto max-h-64 object-contain md:mx-0"
            onError={(e) => (e.target.src = "/images/fallback-image.png")}
          />
        </div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-12 relative z-10">
        <div className="image order-2 md:order-1 px-4 md:px-0 flex justify-center">
          <img
            src="/images/multichannel image.png"
            alt="Multichannel Support"
            className="rounded shadow-lg w-full h-auto max-h-64 object-contain md:mx-0"
            onError={(e) => (e.target.src = "/images/fallback-image.png")}
          />
        </div>
        <div className="content order-1 md:order-2 px-4 md:px-0">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Analytics And Report
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Monitor key performance metrics and customer interactions as they
            happen. Identify trends, measure team performance, and make
            data-driven decisions to optimize your support strategy and improve
            customer satisfaction.
          </p>
          <a href="#" className="text-blue-600 hover:underline">
            Learn more →
          </a>
        </div>
      </div>
    </section>
  );
};

const Landing = () => {
  return (
    <div className="landing-page">
      <header className="flex justify-between items-center w-full p-5 bg-white shadow-md">
        <div className="text-2xl font-bold text-blue-600">
          <img src="/images/LOGO.png" alt="logo" className="h-9" />
        </div>
        <nav className="flex items-center space-x-6">
          <a
            href="#"
            className="hover:text-blue-600 cursor-pointer transition duration-300"
          >
            Product
          </a>
          <a
            href="#"
            className="hover:text-blue-600 cursor-pointer transition duration-300"
          >
            Resources
          </a>
          <a
            href="#solutions"
            className="hover:text-blue-600 cursor-pointer transition duration-300"
          >
            Solutions
          </a>
          <a
            href="#pricing"
            className="hover:text-blue-600 cursor-pointer transition duration-300"
          >
            Pricing
          </a>
          <a
            href="./login"
            className="hover:text-blue-600 cursor-pointer transition duration-300"
          >
            Sign In
          </a>
          <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
            <a href="./signup"> Start Free Trial</a>
          </button>
        </nav>
      </header>

      <HeroSection />

      <section id="solutions" className="services py-20">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
          We provide great services for our customers based on needs
        </h2>
        <div className="services-list grid grid-cols-2 gap-4 max-w-4xl mx-auto">
          <div className="service-item bg-white p-6 shadow-md rounded">
            <FontAwesomeIcon icon={faEnvelope} className="icon mr-2" /> Shared
            Inbox
          </div>
          <div className="service-item bg-white p-6 shadow-md rounded">
            <FontAwesomeIcon icon={faComments} className="icon mr-2" /> Feedback
            Sharing
          </div>
          <div className="service-item bg-white p-6 shadow-md rounded">
            <FontAwesomeIcon icon={faChartLine} className="icon mr-2" />{" "}
            Analytics & Report
          </div>
          <div className="service-item bg-white p-6 shadow-md rounded">
            <FontAwesomeIcon icon={faTicketAlt} className="icon mr-2" /> Ticket
            Management
          </div>
          <div className="service-item bg-white p-6 shadow-md rounded">
            <FontAwesomeIcon icon={faUsers} className="icon mr-2" /> Team
            Collaboration
          </div>
          <div className="service-item bg-white p-6 shadow-md rounded">
            <FontAwesomeIcon icon={faCodeBranch} className="icon mr-2" />{" "}
            Integration
          </div>
        </div>
      </section>
      <FeaturesSection />

      <UnifiedAndMultichannelSection />

      <section className="bg-[#0056B3] p-10 flex flex-col md:flex-row justify-around items-center">
        <div className=" text-white">
          <p className=" pb-4">Start you business with us</p>
          <h2 className="font-semibold text-3xl md:w-1/2">
            Request for a Demo and Get Started
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <Button textColor="#0056B3" leftIcon={<PiSparkle />}>
          <a href="./signup"> Sign up for free</a>
          </Button>
          <Button variant="outline" textColor="white">
          <a href="./demo"> Request Demo</a>
          </Button>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section  id= "pricing" className="text-center py-12 bg-gradient-to-tl from-white to-[#EFF7FF]">
        <h2 className="font-semibold text-3xl py-2">
          Flexible and Transparent Pricing for Every Team
        </h2>
        <p>Choose plan that works best for you, feel free to contact us</p>
        <Button
          margin="auto"
          marginTop="8"
          paddingLeft="8"
          paddingRight="0"
          borderRadius="2xl"
          backgroundColor="#C9CCD1"
          gap="4"
          display="flex"
          alignItems="center"
        >
          Monthly{" "}
          <Button
            borderRadius="2xl"
            colorScheme="blue"
            display="flex"
            gap="2"
            justifyContent="space-between"
            alignItems="center"
          >
            Yearly{" "}
            <small className="text-[#E4BD47] text-xs"> Saves up to 20%</small>
          </Button>
        </Button>

        <Stack
          direction={{base:"column", md:"row"}}
          spacing={4}
          display="flex"
          justifyContent="center"
          margin="auto"
          my="32"
          ba
        >
          <Card width={{base:"100%", md:"20%"}} rounded="xl">
            <CardHeader display="flex" justifyContent="center" gap="4">
              <img
                src="./images/pricing-starter-icon.png"
                alt="starter"
              />
              <p className="text-[#3A404B] font-semibold text-3xl">Starter</p>
            </CardHeader>
            <CardBody>
              <p className="text-[#525A6A]">
                <span className="text-[#3A404B] font-semibold text-3xl">
                  $9{" "}
                </span>{" "}
                / user/ month
              </p>
              <p className="text-[#525A6A] py-2">billed yearly</p>
              <p className="text-[#525A6A] text-sm text-start">
                Essential tools to manage support tickets effectively
              </p>
              <div className="flex flex-col gap-4 bg-[#F9FAFB] rounded-2xl p-4 my-4 text-start">
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  Basic Dashboard Access
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  Email Support
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  Ticket Management
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  Team Collaboration
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  Knowledge base
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  Basic Analytics
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue" w="100%">
              <a href="./signup"> Start Free Trial</a>
              </Button>
            </CardFooter>
          </Card>

          {/* CARD TWO */}
          <Card width={{base:"100%", md:"20%"}} rounded="xl">
            <CardHeader display="flex" justifyContent="center" gap="4">
              <img
                src="/images/pricing-professional-icon.png"
                alt="professional"
              />
              <p className="text-[#3A404B] font-semibold text-3xl">
                Professional
              </p>
            </CardHeader>
            <CardBody>
              <p className="text-[#525A6A]">
                <span className="text-[#3A404B] font-semibold text-3xl">
                  $29{" "}
                </span>{" "}
                / user/ month
              </p>
              <p className="text-[#525A6A] py-2">billed yearly</p>
              <p className="text-[#525A6A] text-sm text-start">
                Multichannel support to manage customer queries
              </p>
              <div className="flex flex-col gap-4 bg-[#F9FAFB] rounded-2xl p-4 my-4 text-start">
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  Advanced Dashboard Access
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  Email & Chat Support
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  Automated Workflows
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  Team Collaboration
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  Knowledge base
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  Advanced Analytics
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue" w="100%">
              <a href="./signup"> Start Free Trial</a>
              </Button>
            </CardFooter>
          </Card>

          {/* CARD THREE */}

          <Card width={{base:"100%", md:"20%"}} rounded="xl">
            <CardHeader display="flex" justifyContent="center" gap="4">
              <img
                src="/images/pricing-standard-icon.png"
                alt="standard"
              />
              <p className="text-[#3A404B] font-semibold text-3xl">Standard</p>
            </CardHeader>
            <CardBody>
              <p className="text-[#525A6A]">
                <span className="text-[#3A404B] font-semibold text-3xl">
                  $59{" "}
                </span>{" "}
                / user/ month
              </p>
              <p className="text-[#525A6A] py-2">billed yearly</p>
              <p className="text-[#525A6A] text-sm text-start">
                Enhanced customization and dedicated support
              </p>
              <div className="flex flex-col gap-4 bg-[#F9FAFB] rounded-2xl p-4 my-4 text-start">
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  All Professional Features
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  Phone Support
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  Customizable Workflows
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  Real-Time Analytics
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  20 User Accounts minimum
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  API Access
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  Dedicated Account Manager
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue" w="100%">
              <a href="./demo"> Request Demo</a>
              </Button>
            </CardFooter>
          </Card>

          {/* CARD FOUR */}

          <Card width={{base:"100%", md:"20%"}} rounded="xl">
            <CardHeader display="flex" justifyContent="center" gap="4">
              <img
                src="/images/pricing-enterprise.png"
                alt="enterprise"
              />
              <p className="text-[#3A404B] font-semibold text-3xl">
                Enterprise
              </p>
            </CardHeader>
            <CardBody>
              <p className="text-[#525A6A]">
                <span className="text-[#3A404B] font-semibold text-3xl">
                  Custom Pricing{" "}
                </span>
              </p>
              <p className="text-[#525A6A] py-2">billed yearly</p>
              <p className="text-[xs]">Contact sales</p>
              <p className="text-[#525A6A] text-sm text-start">
                Maximum flexibility with custom integrations and unlimited
                users.
              </p>
              <div className="flex flex-col gap-4 bg-[#F9FAFB] rounded-2xl p-4 my-4 text-start">
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  All Business Features
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  Unlimited User Accounts
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  Advanced security Features
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  Custom Integrations
                </div>
                <div className="flex  items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  Onboarding & Training Services
                </div>
                <div className="flex items-center gap-2">
                  <FaCheckCircle color="#66B0FF" />
                  24/7 Premium Support
                </div>
              </div>
            </CardBody>
            <CardFooter>
              <Button colorScheme="blue" w="100%">
                <a href="./demo"> Request Demo</a>
              </Button>
            </CardFooter>
          </Card>
        </Stack>
      </section>

      <section className="p-8 m-auto bg-gradient-to-r from-white to-[#EFF7FF]">
        <h2 className="font-semibold text-3xl text-center my-4">
          Frequently asked questions
        </h2>
        <Accordion margin="auto" width="50%" allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" py="2">
                  What is NOVA?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={6}>
              NOVA is a comprehensive customer support ticketing system designed
              to simplify your support process, ensuring quick and efficient
              resolution of customer queries and issues. It is specifically
              tailored to cater to the support needs of financial industries
              such as banks, credit unions, investment firms and insurance
              companies.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" py="2">
                  How does Nova work?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={6}>
              NOVA allows customers to submit support tickets through multiple
              channels depending on your package. These tickets are then tracked
              and assigned to the appropriate support team members for prompt
              resolution giving room for escalations if necessary. Our knowledge
              base and community forums are also available to help you
              troubleshoot and find answers quickly.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" py="2">
                  Is NOVA suitable for small businesses?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={6}>
              Absolutely! NOVA is scalable and can be tailored to fit the needs
              of businesses of all sizes, from small startups to large
              enterprises.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" py="2">
                  Can NOVA integrate with other tools we use?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={6}>
              Yes, NOVA integrates with a variety of tools and platforms
              including CRM systems, email, live chat, and more, to provide a
              consistent support experience.
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box as="span" flex="1" textAlign="left" py="2">
                  How can I get Started with Nova?
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={6}>
              Getting started is easy! Simply sign up for an account, and our
              guided setup process will help you configure your system to meet
              your specific needs. You can also contact our support team for
              personalized assistance.
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </section>

      <section className="bg-[#EFF7FF] p-10 flex flex-col text-center gap-8 justify-around items-center">
        <div>
          <h2 className="font-semibold text-3xl py-4">Ready to Get Started?</h2>
          <p className="font-semibold">Start your free trial today</p>
        </div>

        <div className="flex flex-col md:flex-row gap-10">
          <Button
            textColor="#ffffff"
            backgroundColor="#007BFF"
            leftIcon={<PiSparkle />}
          >
             <a href="./signup"> Sign up for free</a>
          </Button>
          <Button
            border="1px #007bff solid"
            variant="outline"
            textColor="#007BFF"
          >
           <a href="./demo"> Request Demo</a>
          </Button>
        </div>
      </section>

      <footer className="bg-[#0056B3] text-white">
        <div className=" flex flex-col md:flex-row gap-4 justify-around p-10 items-start">
          {/* ONE */}
          <div className="w-1/5 flex flex-col items-start gap-4 pt-6">
            <img src="/images/footer-logo.png" alt="footer logo" />
            <p>
              Experience seamless and efficient issue resolution with our
              advanced ticketing system
            </p>
            <div className="flex gap-4">
              <img src="/images/logo-twitter.png" alt="twitter" />
              <img src="/images/logo-facebook.png" alt="facebook" />
              <img src="/images/logo-instagram.png" alt="instagram" />
              <img src="/images/logo-linkedin.png" alt="linkedin" />
            </div>
          </div>

          {/* TWO */}
          <div>
            <h3 className="py-6">Company</h3>
            <ul className="flex flex-col gap-2">
              <li>About us</li>
              <li>Contact us</li>
              <li>Careers</li>
              <li>Press</li>
            </ul>
          </div>

          {/* THREE */}
          <div>
            <h3 className="py-6">Products</h3>
            <ul className="flex flex-col gap-2">
              <li>Features</li>
              <li>Pricing</li>
              <li>News</li>
              <li>Help desk</li>
              <li>Support</li>
            </ul>
          </div>

          {/* FOUR */}
          <div>
            <h3 className="py-6">Services</h3>
            <ul className="flex flex-col gap-2">
              <li>Digital Marketing</li>
              <li>Content Writing</li>
              <li>SEO for Business</li>
              <li>UI Design</li>
            </ul>
          </div>

          {/* FIVE */}
          <div>
            <h3 className="py-6">Legal</h3>
            <ul className="flex flex-col gap-2">
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
              <li>Return Policy</li>
            </ul>
          </div>

          {/* FIVE */}
          <div>
            <h3 className="py-6">Contact us</h3>
            <ul className="flex flex-col gap-2">
              <li>support@Nova.io</li>
              <li>+234-394-3439-1435</li>
            </ul>
          </div>
        </div>
        <Divider/>

        <div className="flex justify-between md:px-16 pt-6 pb-10">
          <p>Copyright © 2024 Virtuelly</p>
          <p>Terms and conditions </p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
