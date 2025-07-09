import React, { useEffect, useState } from 'react';
import Products from '../components/products/Products';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Video from '../assets/hero.mp4'
import Muscle from '../assets/muscle2.jpg'
import Transfrom from '../assets/transform.jpg'
import Weight from '../assets/weightloss.jpg'
import Flexible from '../assets/flexibility.jpg'
import Subscribe from '../components/Subscribe';
import Hero from '../components/Hero';

const Home = () => {
  const [products, setProducts] = useState([]);
  const domain = window.location.href.includes('localhost') ? "http://localhost:5000" : "https://miranda-fitness-backend.onrender.com";

  const getProducts = async () => {
    const productsData = await axios.get(domain + '/api/products/get-products');

    if (productsData?.data) {
      setProducts(productsData.data);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  // console.log(products[0]?._id);

  console.log(products);
  
  

  return (
    <div className="">

      <Hero products={products}/>

          

      <div className='lg:m-14 m-10'>
        <div className='mb-8'>
          <h2 className="text-3xl font-bold uppercase mb-4 text-center">Explore Program</h2>
        </div>

        <Products products={products}/>
      </div> 

     {/* Why Choose Us Section */}
     <div className="my-14 flex flex-col items-center bg-gray-100 py-10 px-6 rounded-lg">
        <h2 className="text-3xl font-bold  mb-4 text-center uppercase">What I Do to Stay Lean — Made Simple for You.</h2>
        <div className="list-disc text-gray-700 space-y-4 text-center">
          <p>Transform your fitness journey with proven workout plans, meal guides, and tools that deliver real results.</p>
          <p>Save time and eliminate guesswork with step-by-step plans tailored to your goals—whether it’s fat loss, muscle gain, or staying active.</p>
          <p>Stay motivated and consistent with easy-to-follow trackers and planners designed to keep you on track every day.</p>
          <p>Access your fitness toolkit anytime, anywhere—everything you need to succeed is just a click away.</p>
        </div>
      </div>

    {/* Testimonials Section */}
<div className="m-12">
  <h2 className="text-3xl font-bold uppercase text-center mb-6">What People Are Saying</h2>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
    <div className="p-6 bg-gray-100 rounded-lg">
      <p className="text-gray-700">"I stopped overthinking my workouts. I just follow the plan, and I’ve never felt stronger or more consistent."</p>
      <p className="mt-4 text-sm font-semibold">- Alex, Everyday Athlete</p>
    </div>
    <div className="p-6 bg-gray-100 rounded-lg">
      <p className="text-gray-700">"The meal plan is super straightforward. No crazy recipes — just food I actually enjoy and can prep easily."</p>
      <p className="mt-4 text-sm font-semibold">- Maria, Busy Mom</p>
    </div>
  </div>
</div>

    {/* Why Choose Us Section */}
    <Subscribe />
    </div>
  );
};

export default Home;
