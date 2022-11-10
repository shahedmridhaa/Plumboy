import React from "react";
import "./Feature.css";
import allwork from "../../../assest/sectionbutton.jpg";
import { BiMessageSquareCheck } from "react-icons/bi";

const Feature = () => {
  return (
   <div className="bg-slate-50 py-10">
     <div className="max-w-screen-xl mx-auto">
      <div className="text-center">
        <h6 className="feature-heading">FEATURE</h6>
        <h3 className="text-4xl font-extrabold py-3">
          Trusted Plumbing Service
        </h3>
        <h5>
          My professionals are consistently friendly and warm with every <br />
          client i visit, providing them with a world-class experience
        </h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-3 my-10">
        <div className="md:pr-20 my-10">
          <img src={allwork} alt="" />
        </div>
        <div className="my-10">
          <span className="text-lg">
            I am professional plumber. By remaining experts in our field and
            providing exceptional customer service, we deliver unmatched quality
            in a friendly, courteous manner.
          </span>
          <div className="md:pl-20 sm:text-center mt-10 text-lg">
            <li className="flex py-2">
              <span className="feature-icon">
                <BiMessageSquareCheck />
              </span>
              <span className="pl-3">24 Hours Emergency Service</span>
            </li>
            <li className="flex py-2">
              <span className="feature-icon">
                <BiMessageSquareCheck />
              </span>
              <span className="pl-3">Free Estimates</span>
            </li>
            <li className="flex py-2">
              <span className="feature-icon">
                <BiMessageSquareCheck />
              </span>
              <span className="pl-3">15 Years Experience</span>
            </li>
            <li className="flex py-2">
              <span className="feature-icon">
                <BiMessageSquareCheck />
              </span>
              <span className="pl-3">60 Days Services Warranty</span>
            </li>
            <li className="flex py-2">
              <span className="feature-icon">
                <BiMessageSquareCheck />
              </span>
              <span className="pl-3">Top Rated Service</span>
            </li>
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Feature;
