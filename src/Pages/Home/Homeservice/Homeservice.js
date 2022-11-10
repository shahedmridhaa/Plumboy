import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card";

const Homeservice = () => {
  const [service, setService] = useState([]);
  useEffect(() => {
    fetch("https://plumbing-server.vercel.app/services?limit=3")
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);
  return (
    <div className="py-32">
      <div className="text-center pb-20">
        <h6 className="feature-heading">SERVICE</h6>
        <h3 className="text-4xl font-extrabold py-3">
          Our Service Philosophy{" "}
        </h3>
        <h5>
          We know that plumbing emergencies are enough of a headache without{" "}
          <br /> dealing with an ornery customer service rep or repairman
        </h5>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:px-10 sm:px-10 max-w-screen-lg mx-auto gap-5">
        {service.map((srvc) => (
          <Card key={srvc._id} service={srvc}></Card>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link to="/services">
          <button className="btn btn-active btn-primary">More Service</button>
        </Link>
      </div>
    </div>
  );
};

export default Homeservice;
