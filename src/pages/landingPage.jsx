/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import 'animate.css';
import './landingpage.css';

const Header = () => (
  <header className="flex justify-between items-center w-full p-5 bg-white shadow-md">
    <div className="text-2xl font-bold text-blue-600">
      <img src="./public/images/logo.png" alt="logo" className="h-8" />
    </div>
    <nav>
      <ul className="flex space-x-6">
        <li className="hover:text-blue-600 cursor-pointer transition duration-300">Product</li>
        <li className="hover:text-blue-600 cursor-pointer transition duration-300">Resources</li>
        <li className="hover:text-blue-600 cursor-pointer transition duration-300">Solutions</li>
        <li className="hover:text-blue-600 cursor-pointer transition duration-300">Contact Us</li>
        <li className="hover:text-blue-600 cursor-pointer transition duration-300">Sign In</li>
      </ul>
    </nav>
    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
      Start Free Trial
    </button>
  </header>
);

const OverlayCard = ({ className, children }) => (
  <div className={`absolute bg-white p-3 rounded-lg shadow-md overlay-element bounce-in ${className}`}>
    {children}
  </div>
);

const HeroSection = () => (
  <section className="flex flex-col lg:flex-row items-center justify-between w-full p-10 space-y-10 lg:space-y-0">
    <div className="max-w-xl space-y-5">
      <h1 className="text-5xl font-bold">
        Achieve Excellence in <span className="text-blue-600 animate__animated animate__bounce">Customer</span> Support with Our Premium Ticketing Platform
      </h1>
      <p className="text-lg text-gray-700">
        Experience seamless and efficient issue resolution with our advanced ticketing system, designed to enhance customer satisfaction and streamline your support operations.
      </p>
      <div className="flex space-x-4">
        <button className="px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300">
          Sign Up for Free
        </button>
        <button className="px-5 py-3 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-transform transform hover:scale-105 duration-300">
          Request Demo
        </button>
      </div>
    </div>
    <div className="relative w-full lg:w-1/3 max-w-md mt-10 lg:mt-0 transform lg:-translate-x-10">
      <img src="./images/land1.jpg" alt="Hero" className="w-full h-auto rounded-lg shadow-lg object-cover image-move-left" />
      <OverlayCard className="top-5 left-5 flex items-center space-x-2">
        <span>Hello Team</span>
        <button className="bg-blue-600 text-white px-2 py-1 rounded">Send</button>
      </OverlayCard>
      <OverlayCard className="bottom-0 left-0 mb-[-20px] ml-[-20px]">
        <span>$245.00</span>
      </OverlayCard>
      <OverlayCard className="bottom-0 right-0 mb-[-20px] mr-[-20px] text-sm">
        <span>Credit Card<br />1234<br />09/25</span>
      </OverlayCard>
    </div>
  </section>
);

const LandingPage = () => (
  <div className="flex flex-col items-center w-full min-h-screen bg-gray-50 landingpage">
    <Header />
    <HeroSection />
  </div>
);

export default LandingPage;
