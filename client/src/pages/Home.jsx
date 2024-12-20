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
  const domain = window.location.href.includes('localhost') ? "http://localhost:5000" : "https://blood-sugar-backend.onrender.com";

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

      <Hero/>

          

      <div className='m-14'>
        <div className='mb-8'>
          <h2 className="text-3xl font-bold uppercase mb-4 text-center">Explore Fitness programs</h2>
        </div>
        
        <Products products={products}/>

        <div className=" grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-gray-100 p-8 relative min-h-[300px]  border-8 border-indigo-600 ">
            <img src={Transfrom} alt="" className='absolute top-0 left-0 w-full h-full object-cover' />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
            <div className='relative h-full z-10 flex flex-col items-center justify-center'>
              <h3 className="lg:text-3xl sm:text-xl font-bold text-white uppercase mb-4 text-center">Body Transformation</h3>
            </div>
          </div>
          <div className="bg-gray-100 p-8 relative border-8 border-lime-500">
            <img src={Weight} alt="" className='absolute top-0 left-0 w-full h-full object-cover' />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
            <div className='relative h-full z-10 flex flex-col items-center justify-center'>
              <h3 className="text-3xl font-bold text-white mb-4 text-center">WEIGHT LOSS</h3>
            </div>
          </div>
          <div className="bg-gray-100 p-8  relative border-8 border-fuchsia-500">
            <img src={Muscle} alt="" className='absolute top-0 left-0 w-full h-full object-cover' />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
            <div className='relative h-full z-10 flex flex-col items-center justify-center'>
              <h3 className="text-3xl font-bold text-white mb-4 text-center">BUILD MUSCLE</h3>
            </div>
          </div>
          <div className="bg-gray-100 p-8 relative border-8 border-cyan-400">
            <img src={Flexible} alt="" className='absolute top-0 left-0 w-full h-full object-cover' />
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>
            <div className='relative h-full z-10 flex flex-col items-center justify-center'>
              <h3 className="text-3xl font-bold text-white mb-4 text-center">FLEXIBILITY & MOBILITIY</h3>
            </div>
          </div>
        </div>
      </div>

     {/* Why Choose Us Section */}
     <div className="my-14 flex flex-col items-center bg-gray-100 py-10 px-6 rounded-lg">
        <h2 className="text-3xl font-bold  mb-4 text-center uppercase">WHY THESE WORK</h2>
        <div className="list-disc text-gray-700 space-y-4 text-center">
          <p>Transform your fitness journey with proven workout plans, meal guides, and tools that deliver real results.</p>
          <p>Save time and eliminate guesswork with step-by-step plans tailored to your goals—whether it’s fat loss, muscle gain, or staying active.</p>
          <p>Stay motivated and consistent with easy-to-follow trackers and planners designed to keep you on track every day.</p>
          <p>Access your fitness toolkit anytime, anywhere—everything you need to succeed is just a click away.</p>
        </div>
      </div>

    {/* Testimonials Section */}
    <div className="m-12">
      <h2 className="text-3xl font-bold uppercase text-center mb-6">What Our Users Are Saying</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="p-6 bg-gray-100 rounded-lg">
          <p className="text-gray-700">"The tracker has been a game-changer. I can finally see how my food choices affect my glucose, making healthy changes easier than ever!"</p>
          <p className="mt-4 text-sm font-semibold">- Alex, Wellness Advocate</p>
        </div>
        <div className="p-6 bg-gray-100 rounded-lg">
          <p className="text-gray-700">"Such a easy tracker to use! Tracking my sugar levels feels less like a chore and more like a step toward a healthier me."</p>
          <p className="mt-4 text-sm font-semibold">- Maria, Happy User</p>
        </div>
      </div>
    </div>

    {/* Why Choose Us Section */}
    <Subscribe />
    </div>
  );
};

export default Home;
