import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaCircleUser, FaCartShopping, FaArrowRightFromBracket, FaArrowRightToBracket } from "react-icons/fa6";
import { CartContext } from '../context/CartContext';
import { AuthContext } from '../context/AuthContext';


const Navbar = () => {

  const { cart } = useContext(CartContext);
  const { user, dispatch } = useContext(AuthContext);

  console.log(cart);

  const logout = () => {
    localStorage.removeItem('user')

    dispatch({type: 'LOGOUT',})
}
  

  return (
    <div className='w-full p-4 flex justify-between items-center bg-slate-200'>
        <div className='border-sm py-2 px-4 font-semibold '>
          <Link to='/' className='text-pink-600 text-xl italic' >Body & Mind</Link>
        </div>
        {/* <div className='border-sm '>
            <input className='rounded-full bg-white py-2 px-4 w-[300px]' type='text' placeholder='Search for item' />
        </div> */}
        <div className='relative border-sm flex gap-4'>
            <Link to='/cart'>
              <button className='relative p-4 bg-white rounded-full hover:font-semibold hover:cursor-pointer hover:bg-gradient-to-r from-purple-600 to-pink-500 hover:text-white'>
                  <FaCartShopping/>
                  {cart.products.length !== 0  && (
                    <div className='absolute right-[-5px] top-[-15%] m-1 rounded-full bg-blue-600 text-white'>
                      <p className='rounded-full bg-blue-600 text-white py-1 px-2 text-xs'>{cart?.products.length}</p>
                    </div>
                  )}
              </button>
            </Link>
            <Link to="/profile">
              <button className='p-4 bg-white rounded-full hover:font-semibold hover:cursor-pointer hover:bg-gradient-to-r from-purple-600 to-pink-500 hover:text-white'>
                  <FaCircleUser/>
              </button>
            </Link>
              
            {user ? (
              <button onClick={logout} className='p-4 bg-white rounded-full hover:font-semibold hover:cursor-pointer hover:bg-gradient-to-r from-purple-600 to-pink-500 hover:text-white'>
                <FaArrowRightFromBracket />
              </button>
            ) : (
              <Link to="/login">
                <button className='p-4 bg-white rounded-full hover:font-semibold hover:cursor-pointer hover:bg-gradient-to-r from-purple-600 to-pink-500 hover:text-white'>
                <FaArrowRightToBracket />
                </button>
            </Link>
            )}
        </div>
    </div>
  )
}

export default Navbar