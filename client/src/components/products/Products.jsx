import React from 'react';
import { Link } from 'react-router-dom';

const productComp = (product) => {

    return (
        <Link to={`/product/${product._id}`}>
        <div  className='flex flex-col rounded-md border border-slate-200  p-2'>
            {/* Image container with fixed dimensions and cover styling */}
            <div className='w-full h-[200px]'>
                <img className="w-full h-[200px] object-cover rounded-md" src={product.imageUrl} alt='placeholder' />
            </div>
            {/* Content container with space between elements */}
            <div className='flex flex-col justify-between flex-grow'>
                <p className='m-1 font-semibold text-md'>{product.productName}</p>
                <p className='m-1 text-sm text-gray-600 h-[40px] overflow-hidden'>{product.productDescription}</p>
                <p className="m-1 text-sm italicbn ">4.6 rating</p>
                <p className='m-1 text-green-600 font-semibold'>R {product.price}</p>
            </div>
        </div>
        </Link>
    );
};

const Products = ({ products }) => {

  return (
    <div className='grid lg:grid-cols-4 grid-cols-2 gap-4'>
        {products.map((product, index) => (
            <div className='col-span-1' key={index}>
                {productComp(product)}
            </div>
        ))}
    </div>
  );
};

export default Products;
