import React from 'react';

const HomePage = () => {
  return (
    <div className="font-Poppins">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-300 via-purple-500 to-pink-400 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mt-10 mb-4 sm:text-5xl">Unlock Your Potential with Our Courses</h2>
          <p className="text-lg sm:text-xl">Explore a wide range of courses designed to enhance your skills and knowledge.</p>
          <button className="bg-white text-blue-500 py-2 px-6 mt-8 rounded-full hover:bg-orange-400 hover:text-white">
            Get Started
          </button>
        </div>
      </section>

      {/* 2nd part */}
      <div className="flex flex-col sm:flex-row justify-evenly lg:mx-56 mt-10 items-center">
        <div className="left text-center sm:text-left">
          <span className="">OVER 3000 COURSES AVAILABLE</span>
          <h1 className="text-3xl sm:text-5xl my-2 font-semibold sm:w-[70%] lg:w-[650px]">
            Upgrade your learning Skills & Upgrade your life
          </h1>
          <p className="text-sm sm:text-base opacity-70 my-3 sm:w-[70%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ullam libero magni reiciendis quam ipsa
            blanditiis, facilis velit eaque illo?
          </p>
          <div className="flex flex-col sm:flex-row items-center">
            <button className="mb-2 sm:mb-0 sm:me-2 inline-flex items-center justify-center p-1.5 sm:p-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Find Courses
              </span>
            </button>
            <button className="inline-flex items-center justify-center p-1.5 sm:p-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400">
              <span className="px-3 sm:px-4 py-1.5 sm:py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Get Started
              </span>
            </button>
          </div>
        </div>
        <div className="right mt-5 sm:mt-0">
          <img className="w-full sm:w-96" src="https://shiny-puffpuff-667380.netlify.app/assets/images/banner/banner_img.png" alt="Banner" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
