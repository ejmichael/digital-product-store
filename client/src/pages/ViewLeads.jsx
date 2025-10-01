import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewLeads = () => {
  const [leads, setLeads] = useState([]);
  const [modalImage, setModalImage] = useState(null);
  const { service } = useParams();

  const domain = window.location.href.includes('localhost')
    ? 'http://localhost:5000'
    : 'https://lead-generation-backend-np2g.onrender.com';

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await axios.get(`${domain}/api/lead/get-leads/${service}`);
        setLeads(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchLeads();
  }, [service]);

  return (
    <div className="p-4 md:p-6 md:h-[90vh]">
      <div className="flex flex-col md:flex-row mt-24 justify-between items-start md:items-center mb-6 gap-2 md:gap-0">
        <h1 className="text-2xl font-bold text-gray-800">
          {service.toUpperCase()} LEADS
        </h1>
        <button className="bg-[#03989e] text-white font-semibold py-2 px-4 rounded">
          Export
        </button>
      </div>

      {/* Table for larger screens */}
      <div className="hidden md:block overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md text-sm md:text-base">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 border-b text-left">Full Name</th>
              <th className="px-4 py-2 border-b text-left">Surface</th>
              <th className="px-4 py-2 border-b text-left">Property</th>
              <th className="px-4 py-2 border-b text-left">Area</th>
              <th className="px-4 py-2 border-b text-left">Description</th>
              <th className="px-4 py-2 border-b text-left">Photos</th>
              <th className="px-4 py-2 border-b text-left">Email</th>
              <th className="px-4 py-2 border-b text-left">Phone</th>
              <th className="px-4 py-2 border-b text-left">Created</th>
            </tr>
          </thead>
          <tbody>
            {leads.length > 0 ? (
              leads.map((lead, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="px-4 py-2 border-b">{lead.firstName} {lead.surname}</td>
                  <td className="px-4 py-2 border-b">{lead.surfaceType}</td>
                  <td className="px-4 py-2 border-b">{lead.propertyType}</td>
                  <td className="px-4 py-2 border-b">{lead.location}</td>
                  <td className="px-4 py-2 border-b">{lead.description}</td>
                  <td className="px-4 py-2 border-b">
                    <div className="flex gap-2 flex-wrap">
                      {lead.photos?.length > 0 ? (
                        lead.photos.map((url, idx) => (
                          <img
                            key={idx}
                            src={url}
                            alt=""
                            className="w-16 h-16 object-cover rounded cursor-pointer hover:scale-105 transition"
                            onClick={() => setModalImage(url)}
                          />
                        ))
                      ) : (
                        <span className="text-gray-400 text-xs">No photos</span>
                      )}
                    </div>
                  </td>
                  <td className="px-4 py-2 border-b">{lead.emailAddress}</td>
                  <td className="px-4 py-2 border-b">{lead.phoneNumber}</td>
                  <td className="px-4 py-2 border-b">{new Date(lead.createdAt).toISOString().split('T')[0]}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="9" className="text-center py-6 text-gray-500">
                  No leads found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Cards for mobile */}
      <div className="md:hidden flex flex-col gap-4">
        {leads.length > 0 ? (
          leads.map((lead, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg shadow p-4">
              <div className="flex justify-between items-start">
                <h2 className="font-bold text-gray-800">{lead.firstName} {lead.surname}</h2>
                <span className="text-gray-500 text-sm">{new Date(lead.createdAt).toISOString().split('T')[0]}</span>
              </div>
              <p className="text-gray-600 text-sm mt-1">{lead.description}</p>
              <p className="text-gray-600 text-sm mt-1"><strong>Surface:</strong> {lead.surfaceType}</p>
              <p className="text-gray-600 text-sm mt-1"><strong>Property:</strong> {lead.propertyType}</p>
              <p className="text-gray-600 text-sm mt-1"><strong>Area:</strong> {lead.location}</p>
              <p className="text-gray-600 text-sm mt-1"><strong>Email:</strong> {lead.emailAddress}</p>
              <p className="text-gray-600 text-sm mt-1"><strong>Phone:</strong> {lead.phoneNumber}</p>

              <div className="flex gap-2 flex-wrap mt-2">
                {lead.photos?.length > 0 ? (
                  lead.photos.map((url, idx) => (
                    <img
                      key={idx}
                      src={url}
                      alt=""
                      className="w-20 h-20 object-cover rounded cursor-pointer hover:scale-105 transition"
                      onClick={() => setModalImage(url)}
                    />
                  ))
                ) : (
                  <span className="text-gray-400 text-xs">No photos</span>
                )}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-6 text-gray-500">No leads found.</div>
        )}
      </div>

      {/* Fullscreen Modal */}
      {modalImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="Fullscreen"
            className="max-h-[90%] max-w-[90%] rounded shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default ViewLeads;
