import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { Helmet } from 'react-helmet-async';

const Home = () => {
  return (
    <>
    <Helmet>
        <title>Local Pressure Washing Services | Free Quotes in Your Area</title>
        <meta
          name="description"
          content="Fast, affordable pressure washing for driveways, patios, walls, and roofs. Get a free quote from our local pros today!"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://sapressurewasher.co.za/" />
        <meta property="og:title" content="Pressure Washing Services in Your Area" />
        <meta property="og:description" content="Boost curb appeal with expert cleaning. Fast & reliable." />
        <meta property="og:image" content="https://i.postimg.cc/hP08GrNC/Power-Wash.jpg" />
      </Helmet>
    <div className="">
      <Hero />

      {/* Services Section */}
      <section>
        <div className="m-8 md:m-14">
          <section aria-labelledby="services-heading" className="mb-8">
            <h2 className="text-3xl font-bold uppercase mb-4 text-center">
              What We Clean
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto">
              Restore your property's shine with professional pressure washing for driveways, walls, roofs, patios, and more. We handle residential and commercial projects with care and precision.
            </p>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 relative min-h-[300px] border-8 border-[#03989e] rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://i.postimg.cc/LXH2mmPQ/commercial-power-washing.jpg"
                alt="Washing a dirty wall with a pressure washer"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold text-center">Walls & Windows</h3>
              </div>
            </div>
            <div className="relative bg-white p-8 relative min-h-[300px] border-8 border-[#03989e] rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://i.postimg.cc/TwCGwBqd/person-wearing-yellow-rubber-boots-with-high-pressure-water-nozzle-cleaning-dirt-tiles.jpg"
                alt="Pressure washing a driveway"
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold text-center">Driveways & Sidewalks</h3>
              </div>
            </div>
            <div className="bg-white p-8 relative min-h-[300px] border-8 border-[#03989e] rounded-lg shadow-lg overflow-hidden">
              <img
                src="https://i.postimg.cc/6QVBs88G/ROOF-CLEANING.jpg"
                alt="Using a pressure washer to clean a dirty house roof."
                className="absolute top-0 left-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold text-center">Roofs & Gutters</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section>
        <div className="my-14 flex flex-col items-center bg-gray-100 py-10 px-6 rounded-lg">
          <h2 className="text-3xl font-bold mb-4 text-center uppercase">
            Why Choose Us?
          </h2>
          <div className="text-gray-700 space-y-4 text-center max-w-3xl">
            <p>✅ Local, reliable team that arrives on time and gets the job done right.</p>
            <p>✅ Affordable rates with no hidden fees—get a free quote instantly.</p>
            <p>✅ Top-rated pressure washing equipment for deep and lasting results.</p>
            <p>✅ We clean up after ourselves—no mess left behind!</p>
          </div>
        </div>  
      </section>
      

      {/* Call-to-Action Button */}
      <div className='w-full flex justify-center my-4'>
        <div className="flex space-x-4 mb-3">
          <Link to="/contact">
            <button className="bg-[#03989e] text-white font-semibold px-10 py-3 rounded-lg hover:bg-[#027a80] transition">
              Get a Free Quote Now
            </button>
          </Link>
        </div>
      </div>

      {/* Testimonials */}
      <section>
        <div className="m-12">
          <h2 className="text-3xl font-bold uppercase text-center mb-6">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-700">
                “My driveway looks brand new! Fast and professional service—highly recommend.”
              </p>
              <p className="mt-4 text-sm font-semibold">- Amanda, Homeowner</p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow">
              <p className="text-gray-700">
                “Excellent job on our storefront walls and sidewalk. They were in and out with no disruption to business.”
              </p>
              <p className="mt-4 text-sm font-semibold">- Trevor, Shop Owner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Optional: Lead capture or Subscribe */}
      {/* <Subscribe /> */}
    </div>    
    </>

  );
};

export default Home;
