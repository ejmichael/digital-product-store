import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {

  const [leadForm, setLeadForm] = useState({
    firstName: '',
    surname: '',
    emailAddress: '',
    phoneNumber: '',
    description: '',
    service:'pressure-washing'
  })

  const [leadCaptured, setLeadCaptured] = useState(false)

  const handleFormChange = (e) => {
    setLeadForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const domain = window.location.href.includes('localhost')
  ? 'http://localhost:5000'
  : 'https://lead-generation-backend-np2g.onrender.com';

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(
      leadForm.firstName === '' ||
      leadForm.emailAddress === '' ||
      leadForm.phoneNumber === '' ||
      leadForm.description === ''
    ) {return}
    
    try {
      const addLead = await axios.post(domain + '/api/lead/create-lead', leadForm)
      if(addLead.data.message === 'Lead captured') {
        //show success message
        setLeadCaptured(true)
        //clear form 
        setLeadForm({
          firstName: '',
          surname: '',
          emailAddress: '',
          phoneNumber: '',
          description: '',
          service:'pressure-washing'
        })
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img 
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://i.postimg.cc/hP08GrNC/Power-Wash.jpg" 
        alt="Pressure washing in action"
      />

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 lg:px-[10%] py-10">
        
        {/* Text Section */}
        <div className="text-white max-w-xl mb-10 md:mb-0 text-center">
          <h1 className="text-4xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="font-bebas-neue">Restore Your Home’s Curb Appeal</span>
            <br />
            <span className="font-dancing-script font-light text-3xl lg:text-5xl text-white">
              Fast. Affordable. Professional.
            </span>
          </h1>
          <p className="text-lg lg:text-xl mb-8">
            Book your local pressure washing experts for driveways, walls, roofs, patios & more.
          </p>
          {/* <Link to="/book">
            <button className="bg-[#03989e] text-white font-semibold px-8 py-3 rounded-lg hover:bg-[#027a80] transition">
              Get a Free Quote Now
            </button>
          </Link> */}
        </div>

        {/* Form Section */}
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Request a Free Quote</h3>
          <form onSubmit={handleSubmit} id="lead-form" className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              required="true"
              name='firstName'
              onChange={handleFormChange}
              value={leadForm.firstName}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03989e]"
            />
            <input
              type="text"
              placeholder="Surname"
              name='surname'
              onChange={handleFormChange}
              value={leadForm.surname}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03989e]"
            />
            <input
              type="email"
              placeholder="Email Address"
              required="true"
              name='emailAddress'
              onChange={handleFormChange}
              value={leadForm.emailAddress}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03989e]"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              name='phoneNumber'
              required="true"
              onChange={handleFormChange}
              value={leadForm.phoneNumber}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03989e]"
            />
            <textarea
              placeholder="Describe what you need cleaned..."
              rows="3"
              name="description"
              onChange={handleFormChange}
              value={leadForm.description}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03989e]"
            ></textarea>
            <button
              type="submit"
              disabled={leadCaptured}
              className="w-full bg-[#03989e] text-white font-semibold py-2 rounded hover:bg-[#027a80] transition"
            >
              {leadCaptured ? 'Thank you. We will be in contact soon.' : 'Submit Request'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
