import React from 'react';
import Sidebar from './sideBar';
import Header from './header';

const MainLayout = () => {
  const tableData = [
    { name: 'John Doe', ticketId: '12345', subject: 'Login Issue', type: 'Bug', status: 'Open', agent: 'Alice' },
    { name: 'Jane Smith', ticketId: '12346', subject: 'Account Setup', type: 'Support', status: 'Closed', agent: 'Bob' },
    { name: 'Sam Johnson', ticketId: '12347', subject: 'Billing Query', type: 'Support', status: 'In Progress', agent: 'Charlie' },
    // Add more rows as needed
  ];

  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-500 via-green-500 to-purple-500">
      <Sidebar />
      <div className="flex-grow flex flex-col">
        <Header />
        <div className="p-6 bg-white flex-grow overflow-auto">
          <h1 className="text-2xl font-semibold mb-4">All Tickets</h1>
          <input
            type="text"
            placeholder="Search for ticket..."
            className="border border-gray-300 rounded-lg p-2 mb-4 w-full"
          />
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
                {tableData.map((row, index) => (
                  <tr key={index} className="hover:bg-blue-50">
                    <td className="py-3 px-6 border-b">{row.name}</td>
                    <td className="py-3 px-6 border-b">{row.ticketId}</td>
                    <td className="py-3 px-6 border-b">{row.subject}</td>
                    <td className="py-3 px-6 border-b">{row.type}</td>
                    <td className="py-3 px-6 border-b">{row.status}</td>
                    <td className="py-3 px-6 border-b">{row.agent}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
