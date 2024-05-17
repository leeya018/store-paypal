import React from "react";

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-md">
      <div className="text-2xl font-bold">LOGO</div>
      <nav>
        <ul className="flex space-x-6">
          <li>
            <a href="#" className="text-gray-700">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="text-gray-700">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2">
          Log in
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded-md">
          Sign up
        </button>
      </div>
    </header>
  );
};

export default Header;
