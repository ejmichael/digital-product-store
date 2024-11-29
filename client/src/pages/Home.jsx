import React, { useEffect, useState } from 'react';
import Products from '../components/products/Products';
import axios from 'axios';
import { Link } from 'react-router-dom';

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
  

  return (
    <div className="">
      {/* Hero Section */}
      <div className="rounded-lg w-full min-h-[300px] relative pb-0 p-10 justify-center items-center bg-slate-100">
        <div className="text-center">
          <h1 className="text-transparent inline-block lg:py-6 text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text bg-gradient-to-r bg-gradient-to-r from-purple-500 to-pink-500">
            Effortlessly track and manage your weightloss and fitness journey.
          </h1>
          
          <p className="text-lg mt-8 max-w-2xl mx-auto text-center text-slate-700">
            Monitor and manage your weight easily with our comprehensive Weight loss journal. Stay in control of your health journey and track your progress daily.
          </p>
          <p className="text-lg mt-8 max-w-2xl mx-auto text-center text-slate-600 italic">
            Limited offer. Get 55% off now. Valid unitl midnight.
          </p>
          {products[0] && (
            <Link to={`/product/${products[0]._id}`}>
            <button className="mt-6 px-6 py-3 text-white font-semibold rounded-lg hover:bg-gray-100 bg-gradient-to-r bg-gradient-to-r from-purple-500 to-pink-500">
              Get 55% Off Now!
            </button>
          </Link>
          )}
        </div>
        <div className="w-full mt-8" >
          <img className='mx-auto' src="https://i.postimg.cc/6qXNFZR9/Black-and-White-Silhouette-Motivational-Quotes-Facebook-Cover-2.png" alt="Tracker Preview"/>
        </div>
      </div>

      {/* Featured Products Section */}
      {/* <div className="m-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-green-600">
          Discover Our Popular Health Tools
        </h2>
        <Products products={products} />
      </div> */}
      
      {/* Benefits Section */}
      <div className="m-16 grid grid-cols-1 md:grid-cols-3 gap-10">
  <div className="bg-green-100 p-6 rounded-lg">
    <h3 className="text-xl font-semibold text-green-600 mb-4">Daily Workout Logs</h3>
    <p>Track your daily workouts to monitor progress, stay consistent, and achieve your fitness goals.</p>
  </div>
  <div className="bg-green-100 p-6 rounded-lg">
    <h3 className="text-xl font-semibold text-green-600 mb-4">Meal Tracking and Plans</h3>
    <p>Log your meals and follow customized plans to ensure a balanced diet for effective weight loss.</p>
  </div>
  <div className="bg-green-100 p-6 rounded-lg">
    <h3 className="text-xl font-semibold text-green-600 mb-4">Progress Visualization</h3>
    <p>Stay motivated with visual charts showcasing your weight loss, fitness milestones, and health improvements over time.</p>
  </div>
</div>

      </div>

     {/* Why Choose Us Section */}
<div className="my-14 flex flex-col items-center bg-gray-100 py-10 px-6 rounded-lg">
  <h2 className="text-3xl font-semibold text-pink-600 mb-4 text-center">Why Track Your Blood Sugar?</h2>
  <div className="list-disc text-gray-700 space-y-4 text-center">
    <p>Understand how your daily choices impact your blood sugar levels for a healthier lifestyle.</p>
    <p>Spot trends over time to make proactive adjustments that support balanced glucose levels.</p>
    <p>Stay consistent with easy-to-set reminders and personalized tracking insights.</p>
    <p>Access all your records securely and effortlessly in one organized dashboard.</p>
  </div>
</div>

{/* Testimonials Section */}
<div className="m-12">
  <h2 className="text-3xl font-semibold text-center text-pink-600 mb-6">What Our Users Are Saying</h2>
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


      {/* Footer */}
      

    </div>
  );
};

export default Home;
