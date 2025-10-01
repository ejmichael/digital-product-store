import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const [leadForm, setLeadForm] = useState({
    firstName: '',
    surname: '',
    emailAddress: '',
    phoneNumber: '',
    location: '',
    propertyType: '',
    surfaceType: '',
    preferredDate: '',
    description: '',
    service: 'pressure-washing',
    photos: []
  });

  const [uploading, setUploading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const navigate = useNavigate();

  const handleFormChange = (e) => {
    setLeadForm((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));

  };

  console.log(leadForm);

  const handleFileUpload = async(e) => {
    const files = e.target.files;

    if(!files) return;

    setUploading(true);

    const uploadUrls = [];

    for (let i = 0; i < files.length; i++) {
      const formData = new FormData();
      formData.append("file", files[i]);
      formData.append("upload_preset", "my_own_preset");

      try {
        const res = await fetch(`https://api.cloudinary.com/v1_1/dwvrx1rhr/image/upload`, {
          method: "POST",
          body: formData
        });


        const data = await res.json();
        if(data.secure_url) {
          uploadUrls.push(data.secure_url)
        }
      } catch (error) {
        console.error("Cloudinary upload error:", error);
        
      }
    }

     setLeadForm((prev) => ({
      ...prev,
      photos: [...prev.photos, ...uploadUrls],
    }));

    setUploading(false);

  }
  

  const domain = window.location.href.includes('localhost')
    ? 'http://localhost:5000'
    : 'https://lead-generation-backend-np2g.onrender.com';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      leadForm.firstName === '' ||
      leadForm.emailAddress === '' ||
      leadForm.phoneNumber === '' ||
      leadForm.description === ''
    ) return;

    try {
      const addLead = await axios.post(domain + '/api/lead/create-lead', leadForm);
      if (addLead.data.message === 'Lead captured') {
        setLeadCaptured(true);
        setLeadForm({
          firstName: '',
          surname: '',
          emailAddress: '',
          phoneNumber: '',
          location: '',
          propertyType: '',
          surfaceType: '',
          preferredDate: '',
          description: '',
          service: 'pressure-washing',
          photos: []
        });
      }
      navigate('/thank-you');
    } catch (error) {
      console.log(error.message);
    }
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="relative py-24 w-full md:h-screen overflow-hidden">
      {/* Background Image */}
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://i.postimg.cc/hP08GrNC/Power-Wash.jpg"
        alt="Pressure washing"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 lg:px-[10%] py-10">
        {/* Text Section */}
        <div className="text-white max-w-xl mb-10 md:mb-0 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="font-bebas-neue tracking-wide">Make Your Property Look New Again</span><br />
            <span className="font-dancing-script font-light text-3xl lg:text-5xl text-white">
              Fast. Affordable. Professional.
            </span>
          </h1>
          <p className="text-lg lg:text-xl mb-8">
            Professional pressure washing that transforms your home in hours, not days.
          </p>
        </div>

        {/* Multi-Step Form Section */}
        <div className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg w-full max-w-md">
          <h3 className="text-2xl font-bold mb-4 text-gray-800 text-center">Request A Free Quote</h3>
          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Step 1 */}
            {currentStep === 1 && (
              <>
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  required
                  onChange={handleFormChange}
                  value={leadForm.firstName}
                  className="w-full px-4 py-2 rounded border"
                />
                <input
                  type="text"
                  placeholder="Surname"
                  name="surname"
                  onChange={handleFormChange}
                  value={leadForm.surname}
                  className="w-full px-4 py-2 rounded border"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  name="emailAddress"
                  required
                  onChange={handleFormChange}
                  value={leadForm.emailAddress}
                  className="w-full px-4 py-2 rounded border"
                />
              </>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  name="phoneNumber"
                  required
                  onChange={handleFormChange}
                  value={leadForm.phoneNumber}
                  className="w-full px-4 py-2 rounded border"
                />
                <input
                  type="text"
                  placeholder="Suburb / Area"
                  name="location"
                  onChange={handleFormChange}
                  value={leadForm.location}
                  className="w-full px-4 py-2 rounded border"
                />
                <select
                  name="propertyType"
                  onChange={handleFormChange}
                  value={leadForm.propertyType}
                  className="w-full px-4 py-2 rounded border"
                >
                  <option value="">Select Property Type</option>
                  <option value="residential">Residential</option>
                  <option value="commercial">Commercial</option>
                  <option value="industrial">Industrial</option>
                </select>
              </>
            )}

            {/* Step 3 */}
            {currentStep === 3 && (
              <>
                <select
                  name="surfaceType"
                  onChange={handleFormChange}
                  value={leadForm.surfaceType}
                  className="w-full px-4 py-2 rounded border"
                >
                  <option value="">Surface to be cleaned</option>
                  <option value="driveway">Driveway</option>
                  <option value="roof">Roof</option>
                  <option value="walls">Walls</option>
                  <option value="patio">Patio</option>
                  <option value="multiple">Multiple Areas</option>
                </select>
                <textarea
                  placeholder="Describe what you need cleaned..."
                  rows="3"
                  name="description"
                  required
                  onChange={handleFormChange}
                  value={leadForm.description}
                  className="w-full px-4 py-2 rounded border"
                ></textarea>
              </>
            )}

            {currentStep === 4 && (
              <>
                <label className="block text-gray-700 mb-2">Upload Photos (optional)</label>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="w-full"
                />
                {uploading && <p className="text-sm text-gray-500">Uploading...</p>}
                {leadForm.photos.length > 0 && (
                  <div className="grid grid-cols-3 gap-2 mt-2">
                    {leadForm.photos.map((url, idx) => (
                      <img key={idx} src={url} alt="uploaded" className="w-full h-20 object-cover rounded" />
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Step Controls */}
            <div className="flex justify-between pt-2">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="text-gray-600 hover:underline"
                >
                  Back
                </button>
              )}
              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="ml-auto bg-[#03989e] text-white px-4 py-2 rounded hover:bg-[#027a80]"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  disabled={leadCaptured}
                  className="ml-auto bg-[#03989e] text-white font-semibold px-4 py-2 rounded hover:bg-[#027a80] transition"
                >
                  {leadCaptured ? 'Thank you. We will be in contact soon.' : 'Submit Request'}
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
