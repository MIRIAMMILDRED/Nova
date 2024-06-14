/* eslint-disable no-unused-vars */
import React from 'react';
import Header from "../pages/header";
import Sidebar from "../pages/sideBar";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
// eslint-disable-next-line no-unused-vars
import { Grid, GridItem, Checkbox, Button } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import { TbFilterSearch } from "react-icons/tb";
import userDetails from "../utils/data/userdetails.json";

const Assigned = () => {
  return (
    <div className="flex h-screen bg-gradient-to-r from-blue-500 via-green-500 to-purple-500">
      <div className="w-1/5">
        <Sidebar />
      </div>
      <div className="flex-grow flex flex-col">
        <div className="w-full">
          <Header />
        </div>
        <div className="p-6 bg-white flex-grow overflow-auto">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-semibold">Assigned Tickets</h1>
            <div className="flex gap-4">
              <InputGroup>
                <InputLeftElement>
                  <CiSearch />
                </InputLeftElement>
                <Input placeholder="Search for ticket..." />
              </InputGroup>
              <InputGroup marginRight={10}>
                <InputLeftElement>
                  <TbFilterSearch />
                </InputLeftElement>
                <Input placeholder="Filter" />
              </InputGroup>
            </div>
          </div>
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
                {userDetails.users.filter(user => user.agent !== "None").map((user, index) => (
                  <tr key={index} className="hover:bg-blue-50">
                    <td className="py-3 px-6 border-b flex items-center gap-4">
                      <Checkbox size="md" />
                      {user.name}
                    </td>
                    <td className="py-3 px-6 border-b">{user.id}</td>
                    <td className="py-3 px-6 border-b">{user.subject}</td>
                    <td className="py-3 px-6 border-b flex items-center gap-4">
                      <img src="./public/images/Ellipse-icon.png" alt="" />
                      {user.type}
                    </td>
                    <td className="py-3 px-6 border-b">
                      <Button size="xs">{user.status}</Button>
                    </td>
                    <td className="py-3 px-6 border-b">{user.agent}</td>
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

export default Assigned;
