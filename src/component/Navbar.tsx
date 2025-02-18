import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  // Define an array of link objects with properties: path, label, and background color
  const navLinks = [
    { path: "/quote", label: "Random Quote Generator App", bgColor: "bg-blue-500" },
    { path: "/movie", label: "Movie Search App", bgColor: "bg-green-500" },
    { path: "/drawing", label: "Simple Drawing App", bgColor: "bg-red-500" },
    { path: "/meme", label: "Random Meme Viewer App", bgColor: "bg-yellow-500" },
    // { path: "/space", label: "Simple Space Explorer App", bgColor: "bg-purple-500" },
    { path: "/calci", label: "Calculator", bgColor: "bg-orange-500" },
  ];

  return (
    <div className="grid grid-cols-4 gap-5 p-4">
      {navLinks.map((link, index) => (
        <div 
          key={index} 
          className={`flex ${link.bgColor} p-4 rounded-lg text-center`}>
          <Link to={link.path} className="text-white hover:text-gray-300 text-center">
            {link.label}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Navbar;
