import React from 'react'
import { Link } from 'react-router-dom';
import Video from '../assets/hero.mp4'

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              loop
              muted
            >
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
    
            {/* Overlay */}
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-20"></div>
    
            {/* Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <h1 className="text-white md:text-6xl font-bold mb-6">
                <span className='font-bebas-neue text-7xl'>BUILD YOUR BEST BODY. </span>
                <br /> 
                <span className='font-dancing-script font-extralight text-4xl lg:text-6xl'>Transform your life.</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl max-w-2xl mb-8">
                Proven fitness plans, meal guides, and planners designed to get you stronger, leaner, and more confident—starting today.
              </p>
              <div className="flex space-x-4">
                {/* <button className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200">
                  Shop Now
                </button> */}
                <Link to="/products">
                    <button className="bg-transparent border  text-white font-semibold px-6 py-3 rounded hover:bg-gradient-to-r from-purple-600 to-pink-500 hover:text-white">
                    Explore More
                    </button>
                </Link>
              </div>
            </div>
          </div>
  )
}

export default Hero