import React, { useState, useEffect } from 'react';

const Header = ({ data }) => {
  const [username, setUsername] = useState('');

  // Update username based on `data`
  useEffect(() => {
    if (!data ) {
      setUsername('Admin');
    } else {
      setUsername(data.firstName);
    }
  }, [data]);

  return (
    <div className="flex items-end justify-between p-6 bg-gray-800 shadow-lg rounded-lg">
      <h1 className="text-xl font-medium text-gray-300">
        Hello <br />
        <span className="text-3xl font-semibold text-white">{username} 😁😁</span>
      </h1>
      <button className="bg-red-600 text-white text-lg font-medium px-6 py-2 rounded-lg transition duration-200 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">
        Logout
      </button>
    </div>
  );
};

export default Header;
