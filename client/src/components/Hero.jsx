import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img 
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://i.postimg.cc/yNSp5vgy/pressure-washing-bg.jpg" 
        alt="Pressure washing in action"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1 className="text-white md:text-5xl font-bold mb-6">
          <span className="font-bebas-neue text-7xl">Restore Your Home’s Curb Appeal</span>
          <br />
          <span className="font-dancing-script font-light text-4xl lg:text-6xl text-white">
            Fast. Affordable. Professional.
          </span>
        </h1>

        <p className="text-gray-100 text-lg md:text-xl max-w-2xl mb-8">
          Book your local pressure washing experts for driveways, walls, roofs, patios & more. Let your property shine again.
        </p>

        <div className="flex space-x-4">
          <Link to="/book">
            <button className="bg-[#03989e] text-white font-semibold px-10 py-3 rounded-lg hover:bg-[#027a80] transition">
              Get a Free Quote Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
