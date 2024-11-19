import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link, useParams } from 'react-router-dom';
import OrderSection from '../components/OrderSection';

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { section } = useParams(); // Get the section from the URL

  // Render different content based on the section
  const renderContent = () => {
    switch (section) {
      case 'orders':
        return <OrderSection />; 
      case 'payment':
        return (
          <div className=''>
            <p className='font-semibold'>Payment Details</p>
            {/* Replace with actual payment details */}
            <p>No payment details available.</p>
          </div>
        );
      case 'privacy':
        return (
          <div>
            <p className='font-semibold'>Privacy</p>
            {/* Replace with actual privacy settings */}
            <p>Update your privacy settings here.</p>
          </div>
        );
      default:
        return (
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
  <p className="text-xl font-semibold text-gray-800 mb-4 text-pink-600">User Information</p>
  <div className="divide-y divide-gray-300">
    <div className="py-3">
      <p className="text-gray-600 text-sm">Name:</p>
      <p className="text-gray-800 font-medium">{user?.name || 'N/A'}</p>
      <p className="text-gray-600 text-sm mt-2">Surname:</p>
      <p className="text-gray-800 font-medium">{user?.surname || 'N/A'}</p>
    </div>
    <div className="py-3">
      <p className="text-gray-600 text-sm">Email Address:</p>
      <p className="text-gray-800 font-medium">{user?.email || 'N/A'}</p>
      <p className="text-gray-600 text-sm mt-2">Phone:</p>
      <p className="text-gray-800 font-medium">{user?.phoneNumber || 'N/A'}</p>
    </div>
  </div>
</div>

        );
    }
  };

  return (
    <div className='w-full min-h-[75vh]'>
      <div className='w-[60%] mx-auto my-2'>
        <div className='flex justify-around py-4 my-2'>
          <Link to='/profile/information'><button className='font-semibold'>Personal Information</button></Link>
          <Link to='/profile/orders'><button className='font-semibold'>Orders</button></Link>
          {/* <Link to='/profile/payment'><button className='font-semibold'>Payment Details</button></Link> */}
          {/* <Link to='/profile/privacy'><button className='font-semibold'>Privacy</button></Link> */}
        </div>
        <div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Profile;
