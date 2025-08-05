import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../context/CartContext';
import PaystackPayment from './PaystackPayment';
import { AuthContext } from '../context/AuthContext';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PayfastButton from './PayfastButton';
import { toast } from 'react-toastify';
import axios from 'axios';
//import { PaystackButton } from 'react-paystack';

const Cart = () => {

  const { cart, removeFromCart } = useContext(CartContext);
  const { user, dispatch } = useContext(AuthContext);

  const [formSubmitted, setFormSubmitted] = useState(false);

    const [formData, setFormData] = useState({
      firstName: '',
      surname: '',
      email: '',
      phoneNumber: '',
      password: '',
    });

  console.log(cart);

  //const navigate = useNavigate();
  //const location = useLocation();

  const domain = window.location.href.includes('localhost') ? "http://localhost:5000" : "https://miranda-fitness-backend.onrender.com";

  const { firstName, surname, phoneNumber, email, password } = formData;

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Enter your email address");
      return;
    }


    try {
      const response = await axios.post(domain + '/api/user/create-user', { firstName, surname, phoneNumber, email, password });
      const user = response.data;

      // Save the user to localStorage
      localStorage.setItem('user', JSON.stringify(user));

      // Update AuthContext state
      dispatch({ type: 'REGISTER', payload: user });
      setFormSubmitted(true);

      // Navigate to the redirect path or home

    } catch (error) {
      console.error('Register failed', error);
      toast.error("Register failed. Please try again.");
    }
  };
  

  return (
    <div className='m-10 min-h-[75vh] mt-[100px]'>
    {cart.products.length === 0 ? (
      <div className='w-full text-center'>
        <p className="text-4xl font-semibold mb-6 text-blaxk">Oops!</p>
        <p>You do not have anything in your cart.</p>
        <button className='px-6 py-2 my-4 text-white font-medium bg-black hover:bg-slate-600 rounded'>
          <Link to='/'>Back</Link>
        </button>
      </div>
    ) : (
      
      <div className='grid grid-cols-5 gap-4 mt-[100px]'>
        <div className='col-span-5 lg:col-span-3 flex flex-col gap-4'>
        {cart.products.length > 0 && cart.products.map(product => (
          <div key={product._id} className='md:flex gap-4 border border-slate-300 p-4 rounded-lg '>
            <div>
              <img className='lg:max-w-[150px]' src={product.imageUrls[0]} alt={product.productName} />
            </div>
            <div className='md:grid grid-cols-3'>
              <div className='col-span-2 flex-col flex justify-between'>
                <div className=''>
                  <p className='text-xl my-2'>{product.productName}</p>
                  <p className='text-gray-600 text-sm'>{product.productDescription}</p>
                </div>
                {/* <div>
                  <button className='my-2 text-sm cursor-pointer text-red-400 border border-red-300 w-content p-1 rounded-md' onClick={() => removeFromCart(product)}>Remove</button>
                </div> */}
              </div>
              <div className='col-span-1'>
                {/* <p className='w-full md:text-right text-xl my-2'>R 795.99</p> */}
                {/* <p className='w-full text-right text-xl my-2'>R {product.price.toFixed(2)}</p> */}
              </div>
            </div>
          </div>
        ))}
        </div>

        <div className='col-span-5 lg:col-span-2 border-slate-300 px-5 rounded-lg'>
          <p className='text-xl'>Payment Information</p>
          <div className='flex justify-between my-2'>
             <p>Subtotal:</p>
             <p className='text-lg'>R 795.99</p>
          </div>
          <div className='flex justify-between  my-2'>
             <p>Discount:</p>
             <p className='text-lg text-green-500'>- R {795.99 - cart.total.toFixed(2)}</p>
          </div>
          <div className='flex justify-between my-2'>
             <p>Total:</p>
             <p className='text-lg'>R{cart.total.toFixed(2)}</p>
          </div>
          
          {user ? (
            <>
              <button className='w-full p-3 my-2 inline-block bg-black text-white font-semibold px-6 py-3 rounded hover:bg-gray-600 hover:text-white'>
                <PayfastButton />
              </button>
            </>
            )
           : (
            <>
              <div className="flex justify-center">
                <p className='font-medium text-gray-500 text-lg'>Where can we send your plan?</p>
              </div>
                    <div className="flex justify-center">
                      <form onSubmit={handleSubmit} className="my-4 min-w-[300px]">
                        <div className="my-2 flex gap-2">
                          <div className="">
                            <input
                              type="text"
                              className="border rounded p-2 w-full"
                              name="firstName"
                              id='firstName'
                              value={firstName}
                              placeholder="Enter your first name"
                              onChange={handleChange}
                            />
                          </div>
                          <div className="">
                            <input
                              type="text"
                              className="border rounded p-2 w-full"
                              name="surname"
                              id='surname'
                              value={surname}
                              placeholder="Enter your surname"
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="my-2">
                          <input
                            type="email"
                            className="border rounded p-2 w-full"
                            name="email"
                            id='email'
                            value={email}
                            placeholder="Enter your email"
                            onChange={handleChange}
                          />
                        </div>
                        <div className='my-4 w-full border text-center rounded font-semibold'>
                          <button type="submit" className="text-white py-2 hover:shadow-md hover-bg-slate-600 bg-black text-white w-full">Next</button>
                        </div>
                      </form>
                    </div>
            </>
                    
          )}
        </div>
      </div>
    )}
    </div>
  )
}

export default Cart