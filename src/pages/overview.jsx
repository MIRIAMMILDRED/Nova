/* eslint-disable no-unused-vars */
import React from 'react';
import Header from './header';
import SideBar from './sideBar';
import { GoArrowUpRight } from 'react-icons/go';
import { PiDotsThree } from 'react-icons/pi';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import LineGraph from '../components/lineGraph';

const Overview = () => {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-grow">
        <Header />
        <div className="p-6">
          <h3 className="text-2xl font-semibold text-[#3a404b]">Overview</h3>
          <div className="flex gap-8 mb-8">
            <p className="text-[#4b5260]">All data</p>
            <p className="text-[#007bff]">+ Add view</p>
          </div>

          {/* Metric Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card One */}
            <div className="border border-[#c9ccd1] rounded-xl p-4 flex items-center">
              <PiDotsThree className="text-[#3a404b]" />
              <div className="flex flex-col gap-2 ml-4">
                <h3 className="font-semibold text-md">Number of issues</h3>
                <p className="text-sm text-[#858d9d]">This month</p>
                <div className="flex items-center gap-2">
                  <h3>102</h3>
                  <div className="text-[#007bff] flex gap-1 items-center">
                    <GoArrowUpRight /> +14% inc
                  </div>
                </div>
                <CircularProgress color="#007bff" value={74} size="60px">
                  <CircularProgressLabel>74%</CircularProgressLabel>
                </CircularProgress>
              </div>
            </div>

            {/* Card Two */}
            <div className="border border-[#c9ccd1] rounded-xl p-4 flex items-center">
              <PiDotsThree className="text-[#3a404b]" />
              <div className="flex flex-col gap-2 ml-4">
                <h3 className="font-semibold text-md">Issues Solved</h3>
                <p className="text-sm text-[#858d9d]">This month</p>
                <div className="flex items-center gap-2">
                  <h3>72</h3>
                  <div className="text-[#00b087] flex gap-1 items-center">
                    <GoArrowUpRight /> +10% inc
                  </div>
                </div>
                <CircularProgress color="#00b087" value={74} size="60px">
                  <CircularProgressLabel>74%</CircularProgressLabel>
                </CircularProgress>
              </div>
            </div>

            {/* Card Three */}
            <div className="border border-[#c9ccd1] rounded-xl p-4 flex items-center">
              <PiDotsThree className="text-[#3a404b]" />
              <div className="flex flex-col gap-2 ml-4">
                <h3 className="font-semibold text-md">Avg. Resolution Time</h3>
                <p className="text-sm text-[#858d9d]">In the last 7 days</p>
                <div className="flex items-center gap-2">
                  <h3>72h 14m</h3>
                  <div className="text-[#f64b4b] flex gap-1 items-center">
                    <GoArrowUpRight /> +14% inc
                  </div>
                </div>
                <CircularProgress value={74} size="60px">
                  <CircularProgressLabel>74%</CircularProgressLabel>
                </CircularProgress>
              </div>
            </div>

            {/* Card Four */}
            <div className="border border-[#c9ccd1] rounded-xl p-4 flex items-center">
              <PiDotsThree className="text-[#3a404b]" />
              <div className="flex flex-col gap-2 ml-4">
                <h3 className="font-semibold text-md">Client Satisfaction</h3>
                <p className="text-sm text-[#858d9d]">In the last 7 days</p>
                <div className="flex items-center gap-2">
                  <h3>14</h3>
                  <div className="text-[#9747ff] flex gap-1 items-center">
                    <GoArrowUpRight /> +20% inc
                  </div>
                </div>
                <CircularProgress color="#9747ff" value={84} size="60px">
                  <CircularProgressLabel>84%</CircularProgressLabel>
                </CircularProgress>
              </div>
            </div>
          </div>

          {/* Line Graph */}
          <div className="mt-8">
            <LineGraph />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
