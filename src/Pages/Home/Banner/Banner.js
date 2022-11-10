import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
import bannerman from "../../../assest/man.png";

const Banner = () => {
  return (
    <section className="banner">
      <div className="container flex flex-col justify-center p-6 mx-auto  lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <span className="dark:text-indigo-400 text-md">GURRENTED</span>

          <h1 className="text-5xl font-bold my-5">
            Professional Plumbing Service for Your Home
          </h1>
          <span className="py-2 text-lg">
          I've been repairing and installing plumbing systems for nearly 50 years. Let us help you enjoy quality plumbing again!
          </span>
          <div className="flex flex-col space-y-4 sm:items-center sm:py-20 sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              rel="noopener noreferrer"
              to="/blog"
              className="flex text-white text-center bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
            >
              Learn More
            </Link>
            
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-full">
          <img
            src={bannerman}
            alt=""
            className="w-96 object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
