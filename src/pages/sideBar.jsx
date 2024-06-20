/* eslint-disable no-unused-vars */
// src/components/Sidebar.jsx
import React, { useState } from 'react';
import { FiHome, FiClipboard, FiSettings, FiUsers, FiBarChart, FiMessageSquare, FiCheckCircle, FiAlertCircle, FiPieChart, FiTrendingUp, FiStar, FiLogOut } from 'react-icons/fi';

const Sidebar = () => {
  const [isTicketsOpen, setIsTicketsOpen] = useState(false);
  const [isAnalyticsOpen, setIsAnalyticsOpen] = useState(false);

  const toggleTickets = () => {
    setIsTicketsOpen(!isTicketsOpen);
    if (isAnalyticsOpen) setIsAnalyticsOpen(false);
  };

  const toggleAnalytics = () => {
    setIsAnalyticsOpen(!isAnalyticsOpen);
    if (isTicketsOpen) setIsTicketsOpen(false);
  };

 
const handleLogout = () => {
  fetch('http://localhost:8000/logout', { 
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  })
    .then(response => {
      if (response.ok) {
        
        window.location.href = '/'; 
      } else {
        throw new Error('Logout failed');
      }
    })
    .catch(error => {
      console.error('Error logging out:', error);
     
    });
};
  const iconClass = "mr-4 text-xl"; 
  const itemClass = "flex items-center py-3 px-4 hover:bg-blue-200 rounded-lg";

  return (
    <div className="w-full md:w-64 bg-blue-50 text-blue-900 flex flex-col font-sans min-h-screen shadow-lg">
      <div className="flex items-center justify-center h-16 shadow-md">
        <img src="/images/LOGO.png" alt="logo" className="h-10" />
      </div>
      <div className="flex-grow flex flex-col px-4">
        <div className="py-4 text-center">
          <span className="text-sm font-semibold">Admin</span>
        </div>
        <a href="./dashboard" className={itemClass}>
          <FiHome className={iconClass} /> <span>Dashboard</span>
        </a>
        <div>
          <button onClick={toggleTickets} className={`${itemClass} w-full text-left`}>
            <FiClipboard className={iconClass} /> <span>Tickets</span> <span className="ml-auto text-sm">39</span>
          </button>
          {isTicketsOpen && (
            <div className="ml-8">
              <a href="/assigned" className={`${itemClass} py-1`}>
                <FiCheckCircle className={iconClass} /> <span>Assigned</span> <span className="ml-auto text-sm">6</span>
              </a>
              <a href="/unassigned" className={`${itemClass} py-1`}>
                <FiAlertCircle className={iconClass} /> <span>Unassigned</span> <span className="ml-auto text-sm">10</span>
              </a>
              <a href="#" className={`${itemClass} py-1`}>
                <FiMessageSquare className={iconClass} /> <span>Discussion</span> <span className="ml-auto text-sm">8</span>
              </a>
              <a href="#" className={`${itemClass} py-1`}>
                <FiCheckCircle className={iconClass} /> <span>Closed</span> <span className="ml-auto text-sm">9</span>
              </a>
            </div>
          )}
        </div>
        <a href="./team" className={itemClass}>
          <FiUsers className={iconClass} /> <span>Teams</span>
        </a>
        <div>
          <button onClick={toggleAnalytics} className={`${itemClass} w-full text-left`}>
            <FiBarChart className={iconClass} /> <span>Analytics</span>
          </button>
          {isAnalyticsOpen && (
            <div className="ml-8">
              <a href="/teamPerformance" className={`${itemClass} py-1`}>
                <FiTrendingUp className={iconClass} /> <span>Team Performance</span>
              </a>
              <a href="/overview" className={`${itemClass} py-1`}>
                <FiPieChart className={iconClass} /> <span>Overview</span>
              </a>
            </div>
          )}
        </div>
        <a href="#" className={itemClass}>
          <FiSettings className={iconClass} /> <span>Settings</span>
        </a>
        <a href="#" className={itemClass} onClick={handleLogout}>
          <FiLogOut className={iconClass} /> <span>Logout</span>
        </a>
      </div>
      <div className="mt-auto py-4 px-4">
        <div className="bg-gradient-to-r from-blue-400 to-blue-600 p-4 rounded-lg text-white"> 
          <p>Your Free Trial ends in 7 days</p>
          <button className="mt-2 bg-blue-700 hover:bg-blue-800 text-white py-2 px-4 rounded-lg flex items-center">
            <FiStar className="mr-2" /> 
            <span>Upgrade Now</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
