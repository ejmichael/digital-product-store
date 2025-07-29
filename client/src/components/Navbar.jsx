import React, { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  FaCircleUser,
  FaCartShopping,
  FaArrowRightFromBracket,
  FaArrowRightToBracket,
  FaBars,
  FaXmark
} from "react-icons/fa6"
import { CartContext } from '../context/CartContext'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const { cart } = useContext(CartContext)
  const { user, dispatch } = useContext(AuthContext)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
   const location = useLocation();
  const isHomePage = location.pathname === '/'; 

  const logout = () => {
    localStorage.removeItem('user')
    dispatch({ type: 'LOGOUT' })
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className={`font-bebas-neue w-full px-4 py-2 ${isHomePage ? 'bg-transparent text-white absolute' : 'bg-white text-black shadow-md'} flex justify-between items-center top-0 z-20`}>
      {/* Logo */}
      <div className='py-2 px-3 font-bold'>
        <Link to='/' className='font-bebas-neue text-black text-2xl p-2 tracking-wider text-shadow bg-white'>
          MLG Fitness
        </Link>
      </div>

      {/* Center Nav Links (Desktop Only) */}
      <div className=' text-xl tracking-wide hidden md:flex gap-6 font-medium'>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/meal-plan" className="hover:text-gray-300">Meal Plan</Link>
        <Link to="/workout-plan" className="hover:text-gray-300">Workout Plan</Link>
      </div>

      {/* Right Icons (Desktop Only) */}
      <div className='hidden md:flex items-center gap-4'>
        <Link to='/cart'>
          <button className='relative p-3 bg-white text-black rounded-full hover:font-semibold hover:bg-slate-300'>
            <FaCartShopping />
            {cart.products.length !== 0 && (
              <div className='absolute right-[-5px] top-[-15%] m-1 rounded-full bg-blue-600 text-white'>
                <p className='rounded-full bg-blue-600 text-white py-1 px-2 text-xs'>
                  {cart?.products.length}
                </p>
              </div>
            )}
          </button>
        </Link>

        {/* {user && (
          <Link to="/profile">
            <button className='p-3 bg-white rounded-full hover:font-semibold hover:bg-slate-300'>
              <FaCircleUser />
            </button>
          </Link>
        )} */}

        {/* {user ? (
          <button onClick={logout} className='p-3 bg-white rounded-full hover:font-semibold hover:bg-slate-300'>
            <FaArrowRightFromBracket />
          </button>
        ) : (
          <Link to="/login">
            <button className='p-3 bg-white rounded-full hover:font-semibold hover:bg-gradient-to-r from-purple-600 to-pink-500 hover:text-white'>
              <FaArrowRightToBracket />
            </button>
          </Link>
        )} */}
      </div>

      {/* Hamburger (Mobile Only) */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="p-3 text-black bg-white rounded-full">
          {isMenuOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-[70px] right-4 bg-white text-black rounded-lg shadow-lg p-4 flex flex-col gap-3 z-30 w-48">
          <Link to="/about" onClick={toggleMenu} className='flex items-center gap-2'>
            About
          </Link>
          <Link to="/meal-plan" onClick={toggleMenu} className='flex items-center gap-2'>
            Meal Plan
          </Link>
          <Link to="/workout-plan" onClick={toggleMenu} className='flex items-center gap-2'>
            Workout Plan
          </Link>

          <Link to='/cart' onClick={toggleMenu} className='flex items-center gap-2'>
            <FaCartShopping /> Cart
            {cart.products.length !== 0 && (
              <span className='ml-auto bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full'>
                {cart.products.length}
              </span>
            )}
          </Link>

          {/* {user && (
            <Link to="/profile" onClick={toggleMenu} className='flex items-center gap-2'>
              <FaCircleUser /> Profile
            </Link>
          )} */}

          {/* {user ? (
            <button onClick={logout} className='flex items-center gap-2 text-left'>
              <FaArrowRightFromBracket /> Logout
            </button>
          ) : (
            <Link to="/login" onClick={toggleMenu} className='flex items-center gap-2'>
              <FaArrowRightToBracket /> Login
            </Link>
          )} */}
        </div>
      )}
    </div>
  )
}

export default Navbar
