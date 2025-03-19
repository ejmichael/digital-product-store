import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';

const Subscribe = () => {

    const [formInput, setFormInput] = useState({
        firstname: '',
        emailAddress: ''
    });

    const formChange = (e) => {
        setFormInput((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const submitEmailAddress = (e) => {
        e.preventDefault()
        //submit email address logic

        toast.success("Successfully subscribed to newsletter")
    }

  return (
    <div className="mt-14 flex flex-col items-center bg-gray-100 py-10 px-6 rounded-lg">
        <h2 className="text-3xl font-bold  mb-4 text-center uppercase">Get access to my newsletter</h2>
        <div className="list-disc text-gray-700 space-y-4 text-center">
          <p>Don't miss out! Get my weekly workout tips, meal ideas, lot's more when you join.</p>
          <div className='p-2  gap-2 justify-center'>
            <div className='gap-2 justify-center lg:flex sm:flex-col sm:gap-2 sm:mb-2'>
            <input 
                onChange={formChange} 
                className='px-4 py-2 w-full sm:mb-2' 
                type='text' 
                placeholder='First Name'
                name='firstName'
                value={formInput.firstName}
            />
            <input 
                onChange={formChange} 
                className='px-4 py-2 w-full ' 
                type='email' 
                placeholder='Email Address'
                name='emailAddress'
                value={formInput.emailAddress}
            />
            </div>
            <button onClick={submitEmailAddress} className='w-full px-4 py-2 bg-black text-white'>
              Join 
            </button>
          </div>
        </div>
      </div>
  )
}

export default Subscribe