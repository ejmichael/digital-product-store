import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full p-4 flex justify-between items-center bg-slate-200'>
        <div className='border-sm py-2 px-4 font-semibold text-lg'>Digital Products</div>
        <div className='border-sm'>
            <input className='rounded-full bg-white py-2 px-4' type='text' placeholder='Search for item' />
        </div>
        <div className='border-sm'>
            <button className='py-2 px-4 bg-white rounded-full hover:font-semibold hover:cursoor-pointer'>
                Profile
            </button>
        </div>
    </div>
  )
}

export default Navbar