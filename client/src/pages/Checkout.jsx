import React, { useContext, useState, useEffect } from 'react'
import { CartContext } from '../context/CartContext'
import PaystackPayment from '../components/PaystackButton'

const Checkout = () => {
    const { cart } = useContext(CartContext)

    const [deliveryAddress, setDeliveryAddress] = useState({
        streetAddress: '',
        city: '',
        postCode: '',
    })

    const [addressCompleted, setAddressCompleted] = useState(false)

    const { streetAddress, city, postCode } = deliveryAddress;

    const handleDeliveryInfo = (e) => {
        setDeliveryAddress((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    // Use useEffect to update addressCompleted when deliveryAddress changes
    useEffect(() => {
        if(streetAddress !== '' && city !== '' && postCode !== '') {
            setAddressCompleted(true)
        } else {
            setAddressCompleted(false)
        }
    }, [streetAddress, city, postCode])

  return (
    <div className='w-full grid grid-cols-2 gap-3'>
        <div className='lg:w-[80%] mx-auto my-2'>
            <p>Delivery details</p>
            <div className='flex flex-col'>
                <input className='p-2 border rounded-md my-2' type='text' name='streetAddress' value={streetAddress} onChange={handleDeliveryInfo} placeholder='Street Address' />
                <input className='p-2 border rounded-md my-2' type='text' name='city' value={city} onChange={handleDeliveryInfo} placeholder='City' />
                <input className='p-2 border rounded-md my-2' type='text' name='postCode' value={postCode} onChange={handleDeliveryInfo} placeholder='Postal Code' />
            </div>
        </div>
        <div>

            <button disabled={!addressCompleted} className={` ${addressCompleted ? 'bg-blue-400' : 'bg-slate-300'} w-full p-3 my-2 rounded-full text-white font-medium `}>
              <PaystackPayment deliveryAddress={deliveryAddress}/>
            </button>
        </div>
        <div></div>
    </div>
  )
}

export default Checkout
