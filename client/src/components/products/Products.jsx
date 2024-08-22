import React from 'react';
import { Link } from 'react-router-dom';

const productComp = (product) => {
    return (
        <div className='flex flex-col rounded-md border border-slate-200 h-[350px] p-2'>
            {/* Image container with fixed dimensions and cover styling */}
            <div className='w-full h-[200px]'>
                <img className="w-full h-full object-cover rounded-md" src={product.imageUrl} alt='placeholder' />
            </div>
            {/* Content container with space between elements */}
            <div className='flex flex-col justify-between flex-grow'>
                <p className='font-semibold text-md'>{product.productName}</p>
                <p className='text-sm text-gray-600'>{product.productDescription}</p>
                <p>4.6 rating</p>
                <p className='text-green-600 font-semibold'>R {product.price}</p>
            </div>
            <button>
                <Link to={`/product/${product._id}`}>View</Link>
            </button>
        </div>
    );
};

const Products = ({ products }) => {
  return (
    <div className='grid grid-cols-4 gap-4'>
        {products.map((product, index) => (
            <div key={index}>
                {productComp(product)}
            </div>
        ))}
    </div>
  );
};

export default Products;
