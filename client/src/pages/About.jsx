import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-[90vh] py-24 px-4 md:px-12 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-[#03989e]">About Us</h1>
        <p className="text-lg mb-10 text-center">
          At **SparkClean Pressure Washing**, we’re passionate about helping homeowners and businesses restore the beauty of their property. With years of hands-on experience, we know how to tackle tough grime, mold, and buildup — and we do it with care, precision, and reliable service.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[#03989e] shadow-md rounded-xl p-6 border border-blue-100 text-white">
            <h2 className="text-xl font-semibold mb-2">Driveway & Sidewalk Cleaning</h2>
            <p>
              Remove years of dirt, stains, and oil from your concrete surfaces for a fresh, clean finish that boosts curb appeal.
            </p>
          </div>

          <div className="bg-[#03989e] shadow-md rounded-xl p-6 border border-blue-100 text-white">
            <h2 className="text-xl font-semibold mb-2">House Washing</h2>
            <p>
              Our soft-wash method safely cleans siding, brick, and stucco without causing damage — perfect for keeping your home looking its best.
            </p>
          </div>

          <div className="bg-[#03989e] shadow-md rounded-xl p-6 border border-blue-100 text-white">
            <h2 className="text-xl font-semibold mb-2">Decks, Patios & Fences</h2>
            <p>
              Restore the natural color and appearance of your wood or composite outdoor areas with our detailed pressure cleaning service.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4 text-[#03989e]">Why Choose SparkClean?</h2>
          <p className="text-lg max-w-3xl mx-auto">
            We’re a local team committed to quality work, fair pricing, and your total satisfaction. Whether you’re preparing for a home sale, a gathering, or just want to maintain your property, we’re here to help.
          </p>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-2">Ready to restore your property's shine?</h3>
          <p className="mb-4">Get a free quote today — no pressure, just clean results.</p>
          <Link
            to="/"
            className="inline-block bg-white text-[#03989e] border border-[#03989e] hover:bg-[#03989e] hover:text-white px-6 py-3 rounded-full transition"
          >
            Get Your Free Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
