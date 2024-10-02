import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { FaAngleLeft , FaAngleRight } from "react-icons/fa6";

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
                <p className='m-1 text-green-600 font-semibold'>Coming Soon</p>
                {/* <p className='m-1 text-green-600 font-semibold'>R {product.price}</p> */}
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
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,  // Custom previous arrow
        nextArrow: <NextArrow />,  // Custom next arrow
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
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
                {productComp(product)}
            </div>
        ))}
        </Slider>
    </div>
  );
};

export default Products;
