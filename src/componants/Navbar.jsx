import React, { useState } from 'react';

const imageUrl = 'https://tse2.mm.bing.net/th?id=OIP.7DWXljTMZ9WRrQA-nIJd_gHaHa&pid=Api&P=0&h=220';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-slate-200 pr-2 pl-4 shadow-2xl font-Poppins text-black p-4 fixed top-0 w-full z-10">
      <div className="container mx-auto flex gap-4 md:justify-between items-center">
        <img className="w-12 rounded-full" src={imageUrl} alt="Logo" />

        <div className="flex md:hidden">
          <button onClick={toggleMobileMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 cursor-pointer ${isMobileMenuOpen ? 'text-orange-500' : 'text-black'}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              transition="color 0.3s ease-in-out"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        <div className="md:flex items-center flex-col md:flex-row justify-center">
          <div className="relative mr-4">
            <input
              type="search"
              placeholder="Search..."
              className="border-2 hover:border-sky-500 rounded-2xl py-1 px-2 outline-none text-black"
            />
            <button className="absolute right-0 top-0 mt-2 mr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-5-5m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>

          <div className={`md:flex ${isMobileMenuOpen ? 'flex' : 'hidden'} absolute md:relative bg-slate-200 w-full left-0 top-[80px] md:top-0 flex-col md:flex-row justify-center gap-5 md:gap-0 items-center space-x-4`}>
            <a href="#" className="px-4 transition-all duration-300 ease-in-out transform hover:scale-105">
              Home
            </a>
            <a href="#" className="px-4 transition-all duration-300 ease-in-out transform hover:scale-105">
              Courses
            </a>
            <a href="#" className="px-4 transition-all duration-300 ease-in-out transform hover:scale-105">
              About Us
            </a>
            <button
              type="button"
              className="bg-orange-500 mb-4 hover:bg-orange-400 text-white px-4 py-1 rounded-full ml-4"
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;







