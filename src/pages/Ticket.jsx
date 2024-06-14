import React from 'react';
import Layout from './layout';
import { FiEdit, FiCheckCircle } from 'react-icons/fi';

const tickets = [
  // Add ticket data here based on the example provided
];

const Tickets = () => {
  return (
    <Layout>
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">All Tickets</h2>
          <input type="text" placeholder="Search for ticket..." className="border rounded px-4 py-2" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full whitespace-nowrap">
            <thead>
              <tr className="text-left">
                <th className="pb-2">Name</th>
                <th className="pb-2">Ticket ID</th>
                <th className="pb-2">Subject</th>
                <th className="pb-2">Type</th>
                <th className="pb-2">Status</th>
                <th className="pb-2">Agent</th>
                <th className="pb-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map(ticket => (
                <tr key={ticket.id} className="border-t">
                  <td className="py-2">{ticket.name}</td>
                  <td className="py-2">{ticket.ticketId}</td>
                  <td className="py-2">{ticket.subject}</td>
                  <td className="py-2">{ticket.type}</td>
                  <td className="py-2">
                    <span className={`px-2 py-1 rounded ${ticket.status === 'Open' ? 'bg-blue-100 text-blue-800' : 'bg-green-100 text-green-800'}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="py-2">{ticket.agent}</td>
                  <td className="py-2">
                    <button className="text-blue-600 hover:underline"><FiEdit /></button>
                    <button className="text-green-600 hover:underline ml-2"><FiCheckCircle /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default Tickets;
