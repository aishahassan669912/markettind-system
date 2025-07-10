import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">MarketPro</h1>
        <div className="flex items-center space-x-6">
          <ul className="flex space-x-6 text-white">
            <li><a href="#" className="hover:text-yellow-300">Home</a></li>
            <li><a href="#" className="hover:text-yellow-300">Features</a></li>
            <li><a href="#" className="hover:text-yellow-300">Pricing</a></li>
            <li><a href="#" className="hover:text-yellow-300">Contact</a></li>
          </ul>
          <button className="bg-yellow-300 text-amber-700 px-4 py-2 rounded hover:bg-yellow-100 font-medium">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
