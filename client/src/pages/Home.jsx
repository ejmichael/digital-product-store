import React, { useEffect, useState } from 'react';
import Products from '../components/products/Products';
import axios from 'axios';

const Home = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const productsData = await axios.get('http://localhost:5000/api/products/get-products');

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
      <div className="my-8 rounded-lg w-full min-h-[300px] flex p-10 justify-center items-center bg-gradient-to-r from-green-500 to-blue-400">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-white">
            Start Growing Your Business with Our Comprehensive Digital Toolkit
          </h1>
          <p className="text-lg text-white mt-4 max-w-2xl mx-auto">
            Unlock your business potential with our all-in-one digital bundle. From budget planners to contract templates, we've got everything you need to streamline your business operations and boost productivity.
          </p>
          <button className="mt-6 px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100">
            Get Started Now
          </button>
        </div>
      </div>

      {/* Product Benefits Section */}
      <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Budget Planner</h3>
          <p>Manage your finances like a pro with our easy-to-use and customizable budget planner. Track income, expenses, and savings goals effortlessly.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Side Hustle Guide</h3>
          <p>Looking for a side hustle idea? Our guide is packed with actionable insights and tips to help you start and scale your own business.</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">Freelancer Contracts</h3>
          <p>Protect your freelance work with professionally designed contract templates that are easy to customize and use for different clients.</p>
        </div>
      </div>

      {/* Featured Products Section */}
      <div className="my-4">
        <h2 className="text-3xl font-semibold mb-6 text-center text-blue-600">
          Explore Our Digital Products
        </h2>
        <Products products={products} />
      </div>

      {/* Why Choose Us Section */}
      <div className="my-12 flex flex-col items-center bg-gray-50 py-10 px-6 rounded-lg">
        <h2 className="text-3xl font-semibold text-blue-600 mb-4">Why Choose Our Bundle?</h2>
        <ul className="list-disc text-gray-700 space-y-4 max-w-lg">
          <li>All-in-one solution for small business owners and freelancers.</li>
          <li>Easy-to-use templates designed to save time and increase productivity.</li>
          <li>Includes editable PDFs for budgeting, contracts, and business plans.</li>
          <li>Backed by expert guidance for starting and growing side hustles.</li>
        </ul>
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-500">
          Buy the Bundle Now
        </button>
      </div>

      {/* Testimonials Section */}
      <div className="my-12">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-6 bg-gray-100 rounded-lg">
            <p className="text-lg text-gray-700">"The budget planner has changed how I manage my freelance income! It's simple, effective, and easy to use."</p>
            <p className="mt-4 text-sm font-semibold">- Sarah, Freelance Writer</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg">
            <p className="text-lg text-gray-700">"As someone starting a side business, the hustle guide was exactly what I needed to get started. Highly recommended!"</p>
            <p className="mt-4 text-sm font-semibold">- John, Side Hustler</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="py-6 text-center bg-gray-800 text-white rounded-lg">
        <p className="mb-4">© 2024 Your Business Toolkit. All rights reserved.</p>
        <div className="flex justify-center space-x-4">
          <a href="#" className="hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400">Terms of Service</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
