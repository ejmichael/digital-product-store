import React from 'react'
import { Link } from 'react-router-dom';
import Video from '../assets/hero.mp4'

const Hero = ({products}) => {

  console.log(products);
  
  return (
    <div className="relative w-full h-screen overflow-hidden">
            {/* Background Video */}
            <video
              className="absolute top-0 left-0 w-full h-full object-cover"
              autoPlay
              loop
              muted>
              {/* <source src="https://res.cloudinary.com/dwvrx1rhr/video/upload/v1751986539/202507072313_6_iceysc.mp4" type="video/mp4" /> */}
              <source src="https://res.cloudinary.com/dwvrx1rhr/video/upload/v1751986436/202507072313_5_rk0h0w.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
    
            {/* Overlay */}
    
            {/* Content */}
              <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
                <h1 className="md:text-6xl mb-6">
                  <span className="font-bebas-neue text-8xl text-white px-4 tracking-wide" style={{ textShadow: '3px 3px 6px rgba(0, 0, 0, 0.8)' }}>
                    BUILD A healthier, stronger you
                  </span>
                  <br />
                </h1>
                <p className="text-white font-medium text-lg text-center md:text-xl max-w-2xl mb-8 p-3 bg-black bg-opacity-40">
                  Follow the exact workouts and meals I use to stay lean and strong — no confusion, no guesswork. Just healthy, stronger you.
                </p>
                <Link to={`/product/${products[0]?._id}`}>
                  <div>
                    <button className="bg-white text-black font-semibold px-6 py-3 rounded hover:bg-gray-200">
                      Get My Plan – 75% Off
                    </button>
                  </div>
                </Link>
              </div>
          </div>
  )
}



export default Hero