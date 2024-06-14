/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FiHome, FiClipboard, FiSettings, FiUsers, FiBarChart, FiMessageSquare, FiCircle } from 'react-icons/fi';

const Sidebar = () => {
  const [isTicketsOpen, setIsTicketsOpen] = useState(false);

  const toggleTickets = () => {
    setIsTicketsOpen(!isTicketsOpen);
  };

  return (
    <div className="w-full md:w-64 bg-blue-50 text-blue-900 flex flex-col font-sans min-h-screen shadow-lg">
      <div className="flex items-center justify-center h-16 shadow-md">
        <img src="./public/images/logo.png" alt="logo" className="h-10" />
      </div>
      <div className="flex-grow flex flex-col px-4">
        <div className="py-4 text-center">
          <span className="text-sm font-semibold">Admin</span>
        </div>
        <a href="./dashboard" className="flex items-center py-3 px-4 hover:bg-blue-200 rounded-lg">
          <FiHome className="mr-4 text-xl" /> <span>Dashboard</span>
        </a>
        <div>
          <button onClick={toggleTickets} className="flex items-center py-3 px-4 hover:bg-blue-200 rounded-lg w-full text-left">
            <FiClipboard className="mr-4 text-xl" /> <span>Tickets</span> <span className="ml-auto text-sm">39</span>
          </button>
          {isTicketsOpen && (
            <div className="ml-8">
              <a href="/assigned" className="flex items-center py-2 px-4 hover:bg-blue-200 rounded-lg">
                <FiCircle className="mr-4 text-xl" /> <span>Assigned</span> <span className="ml-auto text-sm">6</span>
              </a>
              <a href="/unassigned" className="flex items-center py-2 px-4 hover:bg-blue-200 rounded-lg">
                <FiCircle className="mr-4 text-xl" /> <span>Unassigned</span> <span className="ml-auto text-sm">10</span>
              </a>
              <a href="#" className="flex items-center py-2 px-4 hover:bg-blue-200 rounded-lg">
                <FiMessageSquare className="mr-4 text-xl" /> <span>Discussion</span> <span className="ml-auto text-sm">8</span>
              </a>
              <a href="#" className="flex items-center py-2 px-4 hover:bg-blue-200 rounded-lg">
                <FiCircle className="mr-4 text-xl" /> <span>Closed</span> <span className="ml-auto text-sm">9</span>
              </a>
            </div>
          )}
        </div>
        <a href="./team" className="flex items-center py-3 px-4 hover:bg-blue-200 rounded-lg">
          <FiUsers className="mr-4 text-xl" /> <span>Teams</span>
        </a>
        <a href="#" className="flex items-center py-3 px-4 hover:bg-blue-200 rounded-lg">
          <FiBarChart className="mr-4 text-xl" /> <span>Analytics</span>
        </a>
        <a href="#" className="flex items-center py-3 px-4 hover:bg-blue-200 rounded-lg">
          <FiSettings className="mr-4 text-xl" /> <span>Settings</span>
        </a>
      </div>
      <div className="mt-auto py-4 px-4">
        <div className="bg-blue-100 p-4 rounded-lg">
          <p>Your Free Trial ends in 7 days</p>
          <button className="mt-2 bg-blue-500 text-white py-2 px-4 rounded-lg">Upgrade Now</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
