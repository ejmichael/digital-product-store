import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import PaystackPayment from './PaystackPayment';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
//import { PaystackButton } from 'react-paystack';

const Cart = () => {

  const { cart, removeFromCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  return (
    <div className='m-10'>
      <div>
        <p className='text-semibold text-2xl my-3'>{cart.products.length} items in your cart</p>
      </div>
      <div className='grid grid-cols-5 gap-4'>
        <div className='col-span-3 flex flex-col gap-4'>
        {cart.products.length > 0 && cart.products.map(product => (
          <div className='flex gap-4 border border-slate-300 p-3 rounded-lg '>
            <div>
              <img className='max-w-[150px]' src={product.imageUrl} alt={product.productName} />
            </div>
            <div className='grid grid-cols-3'>
              <div className='col-span-2 flex-col flex justify-between'>
                <div className=''>
                  <p className='text-xl my-2'>{product.productName}</p>
                  <p className='text-gray-600 text-sm'>{product.productDescription}</p>
                </div>
                <div>
                  <button className='my-2 text-sm cursor-pointer text-red-400 border border-red-300 w-content p-1 rounded-md' onClick={() => removeFromCart(product)}>Remove</button>
                </div>
              </div>
              <div className='col-span-1'>
                <p className='w-full text-right text-xl my-2'>R {product.price.toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
        </div>

        <div className='col-span-2 border-slate-300 px-5 rounded-lg'>
          <p className='text-xl'>Payment Information</p>
          <div className='flex justify-between my-2'>
             <p>Total:</p>
             <p className='text-lg'>R{cart.total.toFixed(2)}</p>
          </div>
          <div className='flex justify-between  my-2'>
             <p>Discount:</p>
             <p className='text-lg'>R 0</p>
          </div>
          
          {user ? (
            // <Link to='/checkout'>
            //     <button className='w-full p-3 my-2 rounded-full text-white font-medium bg-blue-400'>
            //     Complete checksout
            //   </button>
            // </Link>
            <button className='w-full p-3 my-2 rounded-full text-white font-medium bg-gradient-to-r  from-purple-500 to-pink-500'>
              <PaystackPayment/>
            </button>
          ) : (
            <Link to='/login'>
              <button className='w-full p-3 my-2 rounded-full text-white font-medium bg-gradient-to-r  from-purple-500 to-pink-500'>
                Login to complete
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart