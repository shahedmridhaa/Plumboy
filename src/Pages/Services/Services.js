import React, { useEffect, useState } from 'react';
import Servicecard from './Servicecard';
import { Helmet } from 'react-helmet'
import PuffLoader from 'react-spinners/PuffLoader'



const Services = () => {
              
  // <Helmet>
  // <title>service</title>
  // </Helmet>

    const [service, setService] = useState([])
    useEffect(()=>{
       fetch('https://plumbing-server.vercel.app/services')
       .then(res => res.json())
       .then(data => setService(data))
    },[])

    return (


      <div>
        <div>
          {
            service.length === 0 ? 
            <>
             <div class="h-screen bg-white">
        <div className="flex justify-center items-center h-full">
          <PuffLoader color="#36d7b7" />
        </div>
      </div>
            </>
            :
            <>
               <div className='max-w-screen-lg mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:px-10 md:px-10 py-20'>
         
         {
          service.map(srvcCrd =><Servicecard
          key={srvcCrd._id}
          service={srvcCrd}
          ></Servicecard>)
         }
      </div>
            </>
          }
        </div>
      </div>
        
     
    );
};

export default Services;