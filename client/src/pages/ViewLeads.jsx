import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewLeads = () => {
  const [leads, setLeads] = useState(null);
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
    <div className="p-6 h-[90vh]">
      <div className="flex mt-24 justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">
          {service.toUpperCase()} Leads
        </h1>
        <button className="bg-[#03989e] text-white font-semibold py-2 px-4 rounded">
          Export
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-6 py-3 border-b text-left">Full Name</th>
              <th className="px-6 py-3 border-b text-left">Surface Type</th>
              <th className="px-6 py-3 border-b text-left">Property Type</th>
              <th className="px-6 py-3 border-b text-left">Area</th>
              <th className="px-6 py-3 border-b text-left">Description</th>
              <th className="px-6 py-3 border-b text-left">Email Address</th>
              <th className="px-6 py-3 border-b text-left">Phone Number</th>
              <th className="px-6 py-3 border-b text-left">Created Date</th>
            </tr>
          </thead>
          <tbody>
            {leads && leads.length > 0 ? (
              leads.map((lead, index) => (
                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="text-sm px-6 py-4 border-b">{`${lead.firstName} ${lead.surname}`}</td>
                  <td className="text-sm px-6 py-4 border-b">{lead.surfaceType}</td>
                  <td className="text-sm px-6 py-4 border-b">{lead.propertyType}</td>
                  <td className="text-sm px-6 py-4 border-b">{lead.area}</td>
                  <td className="text-sm px-6 py-4 border-b">{lead.description}</td>
                  <td className="text-sm px-6 py-4 border-b">{lead.emailAddress}</td>
                  <td className="text-sm px-6 py-4 border-b">{lead.phoneNumber}</td>
                  <td className="text-sm px-6 py-4 border-b">{new Date(lead.createdAt).toISOString().split('T')[0]}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No leads found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewLeads;
