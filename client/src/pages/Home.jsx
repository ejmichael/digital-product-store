import React from 'react';
import { Link } from 'react-router-dom';
import Subscribe from '../components/Subscribe';
import Hero from '../components/Hero';

const Home = () => {
  return (
    <div className="">
      <Hero />

      {/* Benefits Section */}
      <div className="m-14">
        <div className="mb-8">
          <h2 className="text-3xl font-bold uppercase mb-4 text-center">
            Teach Your Puppy the Right Way
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto">
            Get instant access to our step-by-step puppy training guide designed to build good behavior, prevent bad habits, and strengthen your bond with your furry friend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-8 relative min-h-[450px] border-8 border-[#03989e] rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://i.postimg.cc/7YTSpxZ3/004.png"
              alt="Training Module 1"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
          <div className="bg-white p-8 relative border-8 border-[#03989e] rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://i.postimg.cc/52d8JZXZ/Capas-PLR-3.png"
              alt="Training Module 2"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
          <div className="bg-white p-8 relative border-8 border-[#03989e] rounded-lg shadow-lg overflow-hidden">
            <img
              src="https://i.postimg.cc/BnTHnMDt/Capas-PLR-4.png"
              alt="Training Module 3"
              className="absolute top-0 left-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Why Choose This Book */}
      <div className="my-14 flex flex-col items-center bg-gray-100 py-10 px-6 rounded-lg">
        <h2 className="text-3xl font-bold mb-4 text-center uppercase">
          Why This Puppy Training Book?
        </h2>
        <div className="text-gray-700 space-y-4 text-center max-w-3xl">
          <p>✅ Simple, expert-backed methods that actually work—even if it’s your first pup.</p>
          <p>✅ Covers potty training, leash manners, biting, barking, and socialization.</p>
          <p>✅ Builds trust and obedience using positive reinforcement techniques.</p>
          <p>✅ Suitable for all breeds, ages 8 weeks and up.</p>
        </div>
      </div>

      <div className='w-full flex justify-center my-4'>
        <div className="flex space-x-4 mb-3">
          <Link to="https://www.digistore24.com/redir/434590/ejmichael/">
            <button className="bg-[#03989e] text-white font-semibold px-10 py-3 rounded-lg hover:bg-[#027a80] transition">
              Get the Training Guide Now
            </button>
          </Link>
        </div>
      </div>

      {/* Testimonials */}
      <div className="m-12">
        <h2 className="text-3xl font-bold uppercase text-center mb-6">
          What Dog Parents Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <p className="text-gray-700">
              “This guide helped me potty train and teach basic commands in just a few weeks. My puppy listens to me now!”
            </p>
            <p className="mt-4 text-sm font-semibold">- Sarah, Golden Retriever Mom</p>
          </div>
          <div className="p-6 bg-gray-100 rounded-lg shadow">
            <p className="text-gray-700">
              “Such a lifesaver. I had no clue how to stop the biting and chewing—this book gave me real solutions that work.”
            </p>
            <p className="mt-4 text-sm font-semibold">- Jason, New Puppy Owner</p>
          </div>
        </div>
      </div>

      {/* Call-to-Action / Lead Capture */}
      {/* <Subscribe /> */}
    </div>
  );
};

export default Home
