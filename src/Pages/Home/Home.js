import React from 'react';
import { useLoaderData } from 'react-router-dom';
import About from './About/About';
import Banner from './Banner/Banner';
import Feature from './Feature/Feature';
import Homeservice from './Homeservice/Homeservice';
import Testimonial from './Testimonial/Testimonial';
import { Helmet } from 'react-helmet'



const Home = () => {
     
    const services = useLoaderData();
    console.log(services);
    

    return (

     
      <div>
         <Helmet>
         <title>home</title>
        </Helmet>
        <Banner></Banner>
        <Homeservice></Homeservice>
        <Feature></Feature>
        <About></About>
        <Testimonial></Testimonial>
    </div>

  
    );
};

export default Home;