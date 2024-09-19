import React, { useEffect, useState } from 'react';
import Products from '../components/products/Products';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [products, setProducts] = useState([]);
  const domain = window.location.href.includes('localhost') ? "http://localhost:5000" : "https://digital-product-store.onrender.com";

  const getProducts = async () => {
    const productsData = await axios.get(domain + '/api/products/get-products');

    if (productsData?.data) {
      setProducts(productsData.data);
    }
  };

  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="mx-10 my-4">
      {/* Hero Section */}
      <div className="my-8 rounded-lg w-full min-h-[300px] flex p-10 justify-center items-center bg-gradient-to-r from-purple-600 to-pink-500">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white">
          Achieve Your Dream Body with Custom Fitness & Meal Plans
        </h1>
        <p className="text-lg text-white mt-4 max-w-2xl mx-auto">
          Get personalized fitness and nutrition plans that fit your lifestyle. Start your transformation today with our proven programs and expert guidance.
        </p>
        <Link to="/">
          <button className="mt-6 px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100">
            Get Started Now
          </button>
        </Link>
      </div>
    </div>

      

      {/* Featured Products Section */}
      <div className="my-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-pink-600">
          Explore Our Fitness & Nutrition Plans
        </h2>
        <Products products={products} />
      </div>
      
      {/* Product Benefits Section */}
      <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-pink-600 mb-4">Custom Fitness Plan</h3>
          <p>Get a personalized workout routine designed to help you reach your goals, whether it's weight loss, muscle gain, or overall fitness.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-pink-600 mb-4">Meal Plan for Your Goals</h3>
          <p>Our meal plans are crafted to fuel your body with the right nutrients. Whether you need to bulk up or trim down, we've got a plan for you.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-pink-600 mb-4">Expert Fitness Guides</h3>
          <p>Access our comprehensive fitness guides with step-by-step instructions and tips to maximize your workout efficiency.</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="my-14 flex flex-col items-center bg-gray-100 py-10 px-6 rounded-lg">
        <h2 className="text-3xl font-semibold text-pink-600 mb-4">Why Choose Our Fitness Plans?</h2>
        <ul className="list-disc text-gray-700 space-y-4 max-w-lg">
          <li>Customizable fitness and meal plans tailored to your needs.</li>
          <li>Workouts designed by certified trainers to maximize results.</li>
          <li>Nutrition guides that promote healthy and sustainable eating habits.</li>
          <li>Ongoing support to keep you motivated and on track.</li>
        </ul>
        {/* <button className="mt-6 px-6 py-3 bg-pink-600 text-white font-semibold rounded-lg hover:bg-pink-500">
          Get Your Plan Now
        </button> */}
      </div>

      {/* Testimonials Section */}
      <div className="my-12">
        <h2 className="text-3xl font-semibold text-center text-pink-600 mb-6">What Our Clients Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-6 bg-gray-100 rounded-lg">
            <p className="text-lg text-gray-700">"I followed the workout and meal plan, and I saw amazing results in just 8 weeks. Highly recommend!"</p>
            <p className="mt-4 text-sm font-semibold">- Emily, Fitness Enthusiast</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg">
            <p className="text-lg text-gray-700">"The meal plan was easy to follow, and I felt more energized during my workouts. Totally worth it!"</p>
            <p className="mt-4 text-sm font-semibold">- James, Athlete</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-6 text-center bg-gray-800 text-white rounded-lg">
        <p className="mb-4">© 2024 Your Fitness Toolkit. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <Link to="/" className="hover:text-pink-600">Privacy Policy</Link>
          <Link to="/" className="hover:text-pink-600">Terms of Service</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
