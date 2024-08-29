import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

const Cart = () => {

  const { cart, removeFromCart } = useContext(CartContext);



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
              <img className='w-[300px]' src={product.imageUrl} alt={product.productName} />
            </div>
            <div className='flex justify-between'>
              <div>
                <p className='text-xl my-2'>{product.productName}</p>
                <p className='text-gray-600 text-sm'>{product.productDescription}</p>
                <p className='p-2 cursor-pointer' onClick={() => removeFromCart(product)}>Remove</p>
              </div> 
              <p className='w-full text-right text-xl my-2'>R {product.price.toFixed(2)}</p>
            </div>
          </div>
        ))}
        </div>

        <div className='col-span-2 border-slate-300 px-5 rounded-lg'>
          <p>Payment Options</p>
          <div className='flex justify-between my-2'>
             <p>Total:</p>
             <p className='text-lg'>R{cart.total.toFixed(2)}</p>
          </div>
          <div className='flex justify-between  my-2'>
             <p>Discount:</p>
             <p className='text-lg'>R 0</p>
          </div>
          <button className='w-full p-3 my-2 rounded-full text-white font-medium bg-blue-400'>Checkout</button>
        </div>
      </div>
    </div>
  )
}

export default Cart