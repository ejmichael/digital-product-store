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
        return <OrderSection />; ;
      case 'payment':
        return (
          <div>
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
          <div>
            <p className='font-semibold'>Information</p>
            <div>
              <div className='border-b my-3'>
                <p>Name: {user?.name}</p>
                <p>Surname: {user?.surname}</p>
              </div>
              <div className='border-b  my-3'>
                <p>Email Address: {user?.email}</p>
                <p>Phone: {user?.phone ? user?.phone : ''}</p>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className='w-full'>
      <div className='lg:w-[60%] mx-auto my-2'>
        <div className='flex justify-between py-4 my-2'>
          <Link to='/profile/information'><button className='font-semibold'>Information</button></Link>
          <Link to='/profile/orders'><button className='font-semibold'>Orders</button></Link>
          <Link to='/profile/payment'><button className='font-semibold'>Payment Details</button></Link>
          <Link to='/profile/privacy'><button className='font-semibold'>Privacy</button></Link>
        </div>
        <div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Profile;
