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

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="mx-10 my-4">
      {/* Hero Section */}
      <div className="my-8 rounded-lg w-full min-h-[300px] flex p-10 justify-center items-center bg-gradient-to-r from-purple-600 to-pink-500">
        <div className="text-center">
          <h1 className="px-6 text-6xl font-bold text-white">
            Start Your Journey with Our Side Hustle Guides
          </h1>
          <p className="text-lg text-white mt-6 max-w-2xl mx-auto">
            Discover a variety of side hustles that can boost your income. Our comprehensive guides provide you with everything you need to start and succeed in your new venture.
          </p>
          <Link to="/pre-sale">
            <button className="mt-6 px-6 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100">
              Get your free guide
            </button>
          </Link>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="my-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-pink-600">
          Explore Our Popular Digital Products
        </h2>
        <Products products={products} />
      </div>
      
      {/* Benefits Section */}
      <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-pink-600 mb-4">Comprehensive Side Hustle Guides</h3>
          <p>Learn how to start a side hustle that fits your skills and interests with our easy-to-follow guides.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-pink-600 mb-4">Budget and Planning Tools</h3>
          <p>Get access to our budget planners and financial templates to manage your earnings efficiently.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-pink-600 mb-4">Freelancer Contracts & Templates</h3>
          <p>Save time and avoid headaches with our ready-to-use contracts and templates for your freelancing needs.</p>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="my-14 flex flex-col items-center bg-gray-100 py-10 px-6 rounded-lg">
        <h2 className="text-3xl font-semibold text-pink-600 mb-4">Why should you use these resources?</h2>
        <div className="list-disc text-gray-700 space-y-4 max-w-lg text-center">
          <p>Step-by-step guidance for various side hustles.</p>
          <p>Templates and tools to streamline your processes.</p>
          <p>Affordable resources designed for beginners and experienced hustlers alike.</p>
          <p>Ongoing updates and support to keep you on track.</p>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="my-12">
        <h2 className="text-3xl font-semibold text-center text-pink-600 mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-6 bg-gray-100 rounded-lg">
            <p className=" text-gray-700">"The side hustle guides were a game-changer for me! I started my online store in no time!"</p>
            <p className="mt-4 text-sm font-semibold">- Sarah, Entrepreneur</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg">
            <p className="text-gray-700">"These templates made it so easy to get my freelance business up and running. Highly recommend!"</p>
            <p className="mt-4 text-sm font-semibold">- Mike, Freelancer</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-6 text-center bg-gray-800 text-white rounded-lg">
        <div className="mb-4 flex justify-center space-x-4">
          <Link to="/contact" className="hover:text-pink-600">Contact us</Link>
          <Link to="/privacy-policy" className="hover:text-pink-600">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-pink-600">Terms of Service</Link>
        </div>
        <p className="italic">© 2024 Start Your Hustle. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Home;
