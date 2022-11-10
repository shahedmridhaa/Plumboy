import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({service}) => {
    const {name, description, Price, image, _id} = service;
    return (

<div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
<img src={image} className="object-cover w-full h-64" alt="" />

<div className="p-5 border border-t-0">
  
  <p className="inline-block h-[30px] mb-6 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700">
    {name}
  </p>

  <p className="mb-3 text-md font-semibold tracking-wide uppercase">
    <span
      className="transition-colors duration-200 text-blue-gray-900 hover:text-deep-purple-accent-700"
      aria-label="Category"
      title="traveling"
    >
      Price: $ {Price}
    </span>
    <span className="text-gray-600"> {}</span>
  </p>
    <p>
    {
        description.length > 100 ?
          description.slice(0 , 110) + "..." :
          description
          } 
    </p>
    <div className="text-center mt-5">
        <Link to={`/services/${_id}`}>
          <button className="flex font-semibold text-black py-2  hover:text-white bg-indigo-50 border-0  mx-auto px-6 focus:outline-none hover:bg-indigo-600 rounded">
            View Detils
          </button>
        </Link>
        </div>
  
</div>
</div>

    );
};

export default Card;
