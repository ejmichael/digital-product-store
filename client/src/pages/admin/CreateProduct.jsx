import axios from 'axios'
import React, { useState } from 'react'

const CreateProduct = () => {

    const [productInfo, setProductInfo] = useState({
        productName: '',
        productDescription: '',
        price: null,
        imageUrl: ''
    })

    const handleChange = (e) => {
        setProductInfo((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const createProduct = async (e) => {
        e.preventDefault()

        const createNewProduct = await axios.post('http://localhost:5000/api/create-product', {productInfo} )
        console.log(productInfo);
        
    }

  return (
    <div className='w-full h-[calc(100vh-80px)] bg-slate-100 flex'>
        <div className='m-auto lg:w-[30%] md:w-[50%] p-4 bg-white'>
            <form>
                <div className='my-3 flex-col gap-2'>
                    <label>Product Name</label>
                    <input className='w-full border-slate-300 bg-slate-100 p-3 rounded-md mt-1' onChange={handleChange} value={productInfo.productName} type='text' name='productName' />
                </div>
                <div className='my-3 flex-col gap-2'>
                    <label>Product Description</label>
                    <input className='w-full border-slate-300 bg-slate-100 p-3 rounded-md mt-1' onChange={handleChange}  value={productInfo.productDescription} type='text' name='productDescription' />
                </div>
                <div className='my-3 flex-col gap-2'>
                    <label>Product Price</label>
                    <input className='w-full border-slate-300 bg-slate-100 p-3 rounded-md mt-1' onChange={handleChange}  value={productInfo.price} type='number' name='price' />
                </div>
                <div className='my-3 flex-col gap-2'>
                    <label>Product Image Link</label>
                    <input className='w-full border-slate-300 bg-slate-100 p-3 rounded-md mt-1' onChange={handleChange}  value={productInfo.imageUrl} type='text' name='imageUrl' />
                </div>
                <div>
                    <button onClick={createProduct}>Create</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default CreateProduct