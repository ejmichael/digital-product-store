import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// Custom Previous Arrow
const PrevArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} slick-prev`}
      style={{ ...style, display: 'block', left: '-25px', zIndex: 1 }}
      onClick={onClick}
    >
      <FaAngleLeft className="fas fa-chevron-left text-3xl text-pink-400"/>
    </div>
  );
};

// Custom Next Arrow
const NextArrow = ({ className, style, onClick }) => {
  return (
    <div
      className={`${className} slick-next`}
      style={{ ...style, display: 'block', right: '-25px', zIndex: 1 }}
      onClick={onClick}
    >
      <FaAngleRight className="fas fa-chevron-right text-3xl text-pink-400"/>
    </div>
  );
};

const ProductCard = ({ product }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDescription = () => {
    setIsExpanded(prev => !prev);
  };

  return (
    <Link to={`/product/${product._id}`}>
      <div className='flex flex-col rounded-md border border-slate-200 h-full p-2'>
        {/* Image container with fixed dimensions and cover styling */}
        {/* <div className='w-full h-[300px]'>
          <img className="w-full h-full object-cover rounded-md" src={product.imageUrls[0]} alt={product.productName} />
        </div> */}

        <div className="bg-gray-100 p-8 relative h-[300px]  ">
          <img src={product.imageUrls[0]} alt="" className='absolute top-0 left-0 w-full h-full object-cover' />
          <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
          <div className='relative h-full z-10 flex flex-col items-center justify-center'>
            <h3 className="lg:text-3xl sm:text-xl font-bold text-white uppercase mb-4 text-center">{product.productName}</h3>
          </div>
        </div>

        {/* Content container with space between elements */}
        <div className='flex flex-col justify-between flex-grow'>
          <p className='m-1 font-semibold text-md'>{product.productName}</p>

          {/* Description with fixed height, expanding when clicked */}
          <div 
            className={`m-1 text-sm text-gray-600 overflow-hidden transition-all duration-300 ${isExpanded ? 'h-auto' : 'h-[180px]'}`}
          >
            {product.productDescription}
          </div>

          

          <p className="m-1 text-sm italic">4.6 rating</p>
          <p className='m-1 text-green-600 font-semibold'>R {product.price}</p>
        </div>
      </div>
    </Link>
  );
};

const Products = ({ products }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,  // Custom previous arrow
    nextArrow: <NextArrow />,  // Custom next arrow
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className=''>
      <Slider {...settings}> 
        {products.map((product, index) => (
          <div className='p-4' key={index}>
            <ProductCard product={product} />
          </div>
        ))}
     </Slider> 
    </div>
  );
};

export default Products;
