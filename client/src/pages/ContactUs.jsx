import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const ContactUs = () => {
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
  });

  const [currentStep, setCurrentStep] = useState(1);
  const [leadCaptured, setLeadCaptured] = useState(false);
  const navigate = useNavigate();

  const handleFormChange = (e) => {
    setLeadForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const domain = window.location.href.includes('localhost')
    ? 'http://localhost:5000'
    : 'https://lead-generation-backend-np2g.onrender.com';

  const handleSubmit = async (e) => {
    e.preventDefault();
    // basic required fields check
    if (
      leadForm.firstName === '' ||
      leadForm.emailAddress === '' ||
      leadForm.phoneNumber === '' ||
      leadForm.description === ''
    ) return;

    try {
      const response = await axios.post(domain + '/api/lead/create-lead', leadForm);
      if (response.data.message === 'Lead captured') {
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
        });
        navigate('/thank-you');
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const nextStep = () => setCurrentStep((prev) => Math.min(prev + 1, 3));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="px-8 py-24 md:px-20 md:py-20 h-[90vh] flex flex-col md:flex-row items-center justify-around gap-8">
      <div className="w-full">
        <div className="bg-white bg-opacity-90 p-6 rounded-lg border-[#03989e] border w-full max-w-md">
          <h3 className="text-2xl font-bold mb-4 text-center text-[#03989e]">Request A Free Quote</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Step 1 */}
            {currentStep === 1 && (
              <>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  required
                  value={leadForm.firstName}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 rounded border-[#03989e] border focus:outline-none focus:ring-2 focus:ring-[#03989e]"
                />
                <input
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  value={leadForm.surname}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 rounded border-[#03989e] border focus:outline-none focus:ring-2 focus:ring-[#03989e]"
                />
                <input
                  type="email"
                  name="emailAddress"
                  placeholder="Email Address"
                  required
                  value={leadForm.emailAddress}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 rounded border-[#03989e] border focus:outline-none focus:ring-2 focus:ring-[#03989e]"
                />
              </>
            )}

            {/* Step 2 */}
            {currentStep === 2 && (
              <>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  required
                  value={leadForm.phoneNumber}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03989e]"
                />
                <input
                  type="text"
                  name="location"
                  placeholder="Suburb / Area"
                  value={leadForm.location}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03989e]"
                />
                <select
                  name="propertyType"
                  value={leadForm.propertyType}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03989e]"
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
                  value={leadForm.surfaceType}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03989e]"
                >
                  <option value="">Surface to be cleaned</option>
                  <option value="driveway">Driveway</option>
                  <option value="roof">Roof</option>
                  <option value="walls">Walls</option>
                  <option value="patio">Patio</option>
                  <option value="multiple">Multiple Areas</option>
                </select>
                <textarea
                  name="description"
                  placeholder="Describe what you need cleaned..."
                  required
                  rows="3"
                  value={leadForm.description}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#03989e]"
                />
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
              {currentStep < 3 ? (
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

      <div>
        <h1 className="text-4xl font-semibold text-center mb-8 text-[#03989e]">Contact</h1>
        <p className="text-gray-700 mb-4">
          Should you have any questions or queries, please feel free to contact our support person at the email address listed below.
        </p>
        <ul className="list-disc pl-5 text-gray-700 space-y-2">
          <li>Email: <strong>info@sapressurewashers.co.za</strong></li>
          {/* <li>Mailing Address: <strong>[Your Business Address, if applicable]</strong></li> */}
        </ul>
      </div>
    </div>
  );
};

export default ContactUs;
