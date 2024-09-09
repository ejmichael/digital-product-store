import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaCircleUser, FaCartShopping } from "react-icons/fa6";
import { CartContext } from '../context/CartContext';


const Navbar = () => {

  const { cart } = useContext(CartContext);

  console.log(cart);
  

  return (
    <div className='w-full p-4 flex justify-between items-center bg-slate-200'>
        <div className='border-sm py-2 px-4 font-semibold text-lg'>
          <Link to='/' >Digital Products</Link>
        </div>
        <div className='border-sm '>
            <input className='rounded-full bg-white py-2 px-4 w-[300px]' type='text' placeholder='Search for item' />
        </div>
        <div className='relative border-sm flex gap-4'>
            <Link to='/cart'>
              <button className='relative p-4 bg-white rounded-full hover:font-semibold hover:cursor-pointer'>
                  <FaCartShopping/>
                  {cart.products.length !== 0  && (
                    <div className='absolute right-[-5px] top-[-15%] m-1 rounded-full bg-blue-600 text-white'>
                      <p className='rounded-full bg-blue-600 text-white py-1 px-2 text-xs'>{cart?.products.length}</p>
                    </div>
                  )}
              </button>
            </Link>
            <button className='p-4 bg-white rounded-full hover:font-semibold hover:cursor-pointer'>
                <FaCircleUser/>
            </button>
        </div>
    </div>
  )
}

export default Navbar