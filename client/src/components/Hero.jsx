import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img 
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://i.postimg.cc/HnhhCdH0/pet-training-bg.png" 
        alt="Dog mom training her fur baby."
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white md:text-5xl font-bold mb-6">
          <span className="font-bebas-neue text-7xl ">Train Your Pet Like a Pro</span>
          <br />
          <span className="font-dancing-script font-light text-4xl lg:text-6xl text-white">
            Happy dog. Happier home.
          </span>
        </h1>

        <p className="text-gray-100 text-lg md:text-xl max-w-2xl mb-8">
          Discover step-by-step training guides and behavior tips to help your dog become well-behaved, confident, and happy.
        </p>

        <div className="flex space-x-4">
          <Link to="https://www.braintraining4dogs.com/get-btfd/?&shield=64593qkftzr-h6b867meaasbv1">
          {/* <Link to="https://www.digistore24.com/redir/434590/ejmichael/"> */}
            <button className="bg-[#03989e] text-white font-semibold px-10 py-3 rounded-lg hover:bg-[#027a80] transition">
              Get the Training Guide Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
