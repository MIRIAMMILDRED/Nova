import React from 'react';
import { FiBell, FiSettings, FiUser } from 'react-icons/fi';

const Header = () => {
  return (
    <div className="flex items-center justify-between h-16 bg-blue-500 shadow-md px-6 w-full">
      <div className="flex items-center">
        <img src="./public/images/admin.png" alt="logo" className="h-10 mr-4" />
        <span className="font-semibold text-white">Elvin Adam</span>
      </div>
      <div className="flex items-center space-x-4">
        <FiBell className="text-xl text-white" />
        <FiSettings className="text-xl text-white" />
        <FiUser className="text-xl text-white" />
      </div>
    </div>
  );
};

export default Header;
