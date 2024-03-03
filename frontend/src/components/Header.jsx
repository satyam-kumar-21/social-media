import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-500 pl-10 pt-4 pb-5 pr-10 flex justify-between items-center">
      <div>
        <Link to="/" className="text-white text-2xl font-bold">
          Logo
        </Link>
      </div>
      <nav className="hidden md:flex space-x-4">
        <Link to="/posts" className="text-white">
          Posts
        </Link>
        <span className="inline-block mx-2">|</span>
        <img
          src="https://images.unsplash.com/photo-1457449940276-e8deed18bfff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
          className="h-7 w-7 rounded-full hover:cursor-pointer"
        />
      </nav>
      <button className="md:hidden text-white" onClick={toggleMenu}>
        {isMenuOpen ? (
          <FontAwesomeIcon icon={faTimes} />
        ) : (
          <FontAwesomeIcon icon={faBars} />
        )}
      </button>
      {isMenuOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-full bg-gray-800 flex flex-col items-center justify-center">
          <button
            className="text-white absolute top-4 right-4"
            onClick={toggleMenu}
          >
            X
          </button>
          <Link to="/posts" className="text-white my-2">
            Posts
          </Link>
          <Link to="/login" className="text-white my-2">
            Login
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
