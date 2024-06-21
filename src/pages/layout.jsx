/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import Sidebar from './sideBar';
import Header from './header';

const MainLayout = () => {
  const [tickets, setTickets] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchTickets = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://novaend.azurewebsites.net/api/tickets/all');
      if (!response.ok) {
        throw new Error('Failed to fetch tickets');
      }
      const data = await response.json();
      setTickets(data);
    } catch (error) {
      console.error('Error fetching tickets:', error);
      // Handle error state or notification if needed
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredTickets = tickets.filter(ticket => {
    const normalizedQuery = searchQuery.toLowerCase();
    return (
      ticket.requester.toLowerCase().includes(normalizedQuery) ||
      ticket.ticketId.toLowerCase().includes(normalizedQuery)
    );
  });

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-500 via-green-500 to-purple-500">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Header />
        <div className="p-6 bg-white flex-grow overflow-auto">
          <h1 className="text-2xl font-semibold mb-4">All Tickets</h1>
          <input
            type="text"
            placeholder="Search for ticket by name or ticket ID..."
            className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
            value={searchQuery}
            onChange={handleSearchChange}
          />
          {loading ? (
            <p className="text-gray-600">Loading tickets...</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden shadow-lg">
                <thead className="bg-blue-100">
                  <tr>
                    <th className="py-3 px-6 text-left">Name</th>
                    <th className="py-3 px-6 text-left">Ticket ID</th>
                    <th className="py-3 px-6 text-left">Subject</th>
                    <th className="py-3 px-6 text-left">Type</th>
                    <th className="py-3 px-6 text-left">Status</th>
                    <th className="py-3 px-6 text-left">Agent</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredTickets.map((ticket, index) => (
                    <tr key={index} className="hover:bg-blue-50">
                      <td className="py-3 px-6 border-b">{ticket.requester}</td>
                      <td className="py-3 px-6 border-b">{ticket.ticketId}</td>
                      <td className="py-3 px-6 border-b">{ticket.subject}</td>
                      <td className="py-3 px-6 border-b">{ticket.type}</td>
                      <td className="py-3 px-6 border-b">{ticket.state}</td>
                      <td className="py-3 px-6 border-b">{ticket.assignedAgent}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
