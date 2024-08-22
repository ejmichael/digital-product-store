import React, { useEffect, useState } from 'react'
import Products from '../components/products/Products'
import axios from 'axios'

const Home = () => {

  const [products, setProducts] = useState([])

  const getProducts = async() => {
    const productsData = await axios.get('http://localhost:5000/api/products');

    if(productsData?.data) {
      setProducts(productsData.data);
    }
  }

  console.log(products);

  useEffect(() => {
    getProducts()
  }, [])
  

  return (
    <div className='mx-10 my-4'>
        {/* Hero */}
        <div className='my-8 rounded-lg w-full min-h-[200px] flex p-10 justify-center items-center font-semibold bg-gradient-to-r from-cyan-500 to-blue-400'>
          <p className='text-4xl text-white'>Find the best Canva design templates that you can easily use for you business.</p>
        </div>

        {/* Products */}
        <div className='my-4'>
          <Products products={products} />          
        </div>

        
        {/* Footer */}
    </div>
  )
}

export default Home