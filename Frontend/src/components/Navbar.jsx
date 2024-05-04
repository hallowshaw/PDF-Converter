import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar({ toggleDarkMode, isDarkMode }) {
  return (
    <div
      className={`max-w-screen-2xl mx-auto container px-6 py-3 md:px-40 shadow-lg h-16 fixed ${
        isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between items-center">
        <h1 className="text-2xl cursor-pointer font-bold">
          Word<span className="text-3xl text-green-500">To</span>PDF
        </h1>
        <button
          onClick={toggleDarkMode}
          className="mt-1 flex items-center cursor-pointer font-bold hover:scale-125 duration-300"
        >
          {isDarkMode ? (
            <>
              <FaSun className="mr-1" /> Light Mode
            </>
          ) : (
            <>
              <FaMoon className="mr-1" /> Dark Mode
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
