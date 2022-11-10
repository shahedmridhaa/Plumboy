import React from "react";
import { Link } from "react-router-dom";
import "./Banner.css";
// import bannerman from "../../../assest/man.png";

const Banner = () => {
  return (
    <div className="hero banner">
      <div className=" bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md text-black">
          <h1 className="mb-5 text-3xl font-bold">
           Plumbing and Drain Cleaning Professionals
          </h1>
          <p className="mb-5">
          Mr. Rooter is dedicated to addressing your plumbing needs as quickly as possible. We know that for both residential and commercial clients, you need to have working plumbing every day.
          </p>
          <Link to="/blog">
          <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
