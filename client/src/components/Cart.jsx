import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import PaystackPayment from './PaystackPayment';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';
import PayfastButton from './PayfastButton';
//import { PaystackButton } from 'react-paystack';

const Cart = () => {

  const { cart, removeFromCart } = useContext(CartContext);
  const { user } = useContext(AuthContext);

  console.log(cart);
  

  return (
    <div className='m-10 min-h-[75vh]'>
    {cart.products.length === 0 ? (
      <div className='w-full text-center'>
        <p className="text-4xl font-semibold mb-6 text-pink-600">Oops!</p>
        <p>You do not have anything in your cart.</p>
        <button className='px-6 py-2 my-4 rounded-full text-white font-medium bg-gradient-to-r  from-purple-500 to-pink-500 '>
          <Link to='/'>Back</Link>
        </button>
      </div>
    ) : (
      
      <div className='grid grid-cols-5 gap-4'>
        <div className='col-span-5 lg:col-span-3 flex flex-col gap-4'>
        {cart.products.length > 0 && cart.products.map(product => (
          <div className='flex flex-wrap gap-4 border border-slate-300 p-3 rounded-lg '>
            <div>
              <img className='lg:max-w-[150px]' src={product.imageUrl} alt={product.productName} />
            </div>
            <div className='grid grid-cols-3'>
              <div className='col-span-2 flex-col flex justify-between'>
                <div className=''>
                  <p className='text-xl my-2'>{product.productName}</p>
                  {/* <p className='text-gray-600 text-sm'>{product.productDescription}</p> */}
                </div>
                {/* <div>
                  <button className='my-2 text-sm cursor-pointer text-red-400 border border-red-300 w-content p-1 rounded-md' onClick={() => removeFromCart(product)}>Remove</button>
                </div> */}
              </div>
              <div className='col-span-1'>
                <p className='w-full text-right text-xl my-2'>R 399.00</p>
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
             <p className='text-lg'>R 399.00</p>
          </div>
          <div className='flex justify-between  my-2'>
             <p>Discount:</p>
             <p className='text-lg text-green-500'>- R 219.00</p>
          </div>
          <div className='flex justify-between my-2'>
             <p>Total:</p>
             <p className='text-lg'>R{cart.total.toFixed(2)}</p>
          </div>
          
          {user ? (
            // <Link to='/checkout'>
            //     <button className='w-full p-3 my-2 rounded-full text-white font-medium bg-blue-400'>
            //     Complete checksout
            //   </button>
            // </Link>
            <button className='w-full p-3 my-2 rounded-full text-white font-medium bg-gradient-to-r  from-purple-500 to-pink-500'>
              {/* <PaystackPayment/> */}
              <PayfastButton />
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
    )}
    </div>
  )
}

export default Cart