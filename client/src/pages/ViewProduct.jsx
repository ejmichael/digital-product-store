import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ViewProduct = () => {
    const { productID } = useParams();
    const { addToCart, removeFromCart, isProductInCart } = useContext(CartContext);
    const [productInfo, setProductInfo] = useState(null);
    const domain = window.location.href.includes('localhost') ? "http://localhost:5000" : "https://miranda-fitness-backend.onrender.com";
    const navigate = useNavigate()

    const [selectedImg, setSelectedImg] = useState(null)

    const getProduct = async () => {
        try {
            const response = await axios.get(domain + `/api/products/${productID}`);
            if (response.data) {
                setProductInfo(response.data);
                setSelectedImg(productInfo.imageUrls[0])
            }
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

    console.log(productInfo);
    

    useEffect(() => {
        getProduct();
    }, [productID]);

    const handleCartAction = () => {
        if (productInfo) {
            if (isProductInCart(productInfo._id)) {
                removeFromCart(productInfo);
            } else {
                addToCart(productInfo);
            }
        }
    };

    if (!productInfo) return <div>Loading...</div>;

    const goToCheckout = async () => {
        if (productInfo) {
            if (!isProductInCart(productInfo._id)) {
                await addToCart(productInfo); // Ensure addToCart completes
            }
            navigate('/cart'); // Navigate after ensuring the cart is updated
        }
    };

    return (
        <div className='mx-10 my-8 mt-[80px]'>
            {/* <div className='text-xl my-4'>ViewProduct: {productInfo.productName}</div> */} 
            <div className='grid grid-cols-5 gap-4 my-8'>
            <div className="col-span-5 lg:col-span-3 gap-4 px-2">
            {/* Main Image */}
            <div className="flex flex-col lg:flex-row-reverse justify-center">
                <div className="lg:w-[90%]">
                <img
                    className="w-full md:w-[80%] max-h-[600px] xl:max-h-[800px] object-cover m-auto border border-2 rounded-md"
                    src={selectedImg || productInfo.imageUrls[0]}
                    alt={productInfo.productName}
                />
                </div>

    {/* Thumbnails */}
    {/* <div className="flex lg:flex-col flex-wrap lg:ml-4 justify-center gap-2 mt-2 lg:mt-0">
      {productInfo.imageUrls.map((imgUrl, index) => (
        <img
          key={index}
          className="md:h-[80px] md:w-[80px] object-cover w-[50px] h-[50px] border border-2 rounded-md hover:border-red-500 cursor-pointer"
          onClick={() => setSelectedImg(imgUrl)}
          src={imgUrl}
          alt={productInfo.productName}
        />
      ))}
    </div> */}
  </div>
</div>
                <div className='col-span-5 lg:col-span-2 px-4'>
                    <p className='text-3xl my-4 font-semibold'>{productInfo.productName}</p>
                    <p className='text-slate-600 my-4'>{productInfo.productDescription}</p>
                    <div className='flex items-end gap-2'>
                        <p className='my-4 text-2xl text-green-600'>R {(productInfo.price).toFixed(2)}</p>
                        <p className='my-4 text-slate-500 line-through'>R 599.99</p>
                        {/* <p className='my-4 text-slate-500 line-through'>R {(productInfo.price*2.21667).toFixed(2)}</p> */}
                    </div>
                    <div className='flex'>
                       <button 
                        className='my-4 h-[50px] w-[100%] my-3 inline-block bg-black text-white font-semibold px-6 py-3 rounded hover:bg-gray-600 hover:text-white'
                        onClick={goToCheckout}
                        >
                            {/* {isProductInCart(productInfo._id) ? 'Remove from Cart' : 'Add to Cart'} */}
                            Buy Now
                        </button>
                        
                    </div>
                    
                    <div>
                        <p className='my-4 font-semibold text-lg'>Delivery</p>
                        <div>
                            <p className='my-4'>Instant Download</p>
                            <p className='my-4 font-thin'>
                                All files will be made available for download once payment has been made. 
                            </p>
                            {/* <p className='my-4 font-thin'>
                                The download will be availble in the Orders section on the Profile page. 
                            </p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProduct;
