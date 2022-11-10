import React, { useState } from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Addreview from './Rating/Addreview/Addreview';
import Rivewsection from './Rating/Rivewsection/Rivewsection';
import Reload from "../Reload/Reload"
import { Helmet } from 'react-helmet'


const Carddetils = () => {

    const [load, setLoad] = useState(true)
 
    const detils = useLoaderData()
    const {name, image, description, Price, rating, _id} = detils
    console.log(detils);


    const handleperc= () =>{
      toast.success('Thanks for purchase');
    }

    return (
 <div>
  
  <Helmet>
    <title>service details</title>
   </Helmet>
 <section className="text-gray-600 overflow-hidden bg-slate-100">
  <div className="max-w-screen-lg px-5 py-24 mx-auto ">
    <div className="grid sm:grid-cols-1 md:grid-cols-2">

    <div>
  <img src={image} alt="" />
  </div>


    <div className="pl-10 ">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Plamboy</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3">{rating} Reviews</span>
          </span>
          
        </div>
        <p className="leading-relaxed">{description}</p>
       <div className='my-5'>
        <hr />
       </div>
        <div className="flex">
          <span className="title-font font-medium text-2xl text-gray-900">${Price}</span>
 
          <button onClick={handleperc} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">purchase</button>
          
          <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
      
    </div>
  </div>
</section>



{/* Review section */}

<section className='py-20'>
    <div className='text-center py-10'>
       <p className='text-2xl font-bold'> All Rivews</p>
    </div>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
  
   <>
   {
    load?  
    <>
    <Rivewsection
      id={_id}
      load={load}
      ></Rivewsection>
    </>
    
    :

    <>
    <Reload></Reload>
    </>


   }
   </>




 


      <Addreview
      key={_id}
      s_id={_id}
      title={name}
      setLoad={setLoad}
      ></Addreview> 
</div>
</section>

 </div>

    );
};

export default Carddetils;