import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ViewProduct = () => {
    const { productID } = useParams();
    const { addToCart, removeFromCart, isProductInCart } = useContext(CartContext);
    const [productInfo, setProductInfo] = useState(null);
    const domain = window.location.href.includes('localhost') ? "http://localhost:5000" : "https://digital-product-store-1.onrender.com";

    const getProduct = async () => {
        try {
            const response = await axios.get(domain + `/api/products/${productID}`);
            if (response.data) {
                setProductInfo(response.data);
            }
        } catch (error) {
            console.error('Error fetching product:', error);
        }
    };

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

    return (
        <div className='mx-10 my-4'>
            {/* <div className='text-xl my-4'>ViewProduct: {productInfo.productName}</div> */}
            <div className='grid grid-cols-5 gap-4 my-8'>
                <div className='col-span-3 gap-4 px-4'>
                    <img className='w-[80%] m-auto' src={productInfo.imageUrl} alt={productInfo.productName} />
                </div>
                <div className='col-span-2 px-4'>
                    <p className='text-3xl my-4'>{productInfo.productName}</p>
                    <p className='text-slate-600 my-4'>{productInfo.productDescription}</p>
                    <div className='flex items-end gap-2'>
                        <p className='my-4 text-2xl text-green-600'>R {(productInfo.price/1.35).toFixed(2)}</p>
                        <p className='my-4 text-slate-500 line-through'>R {productInfo.price.toFixed(2)}</p>
                    </div>
                    <button 
                        className='my-4 h-[50px] w-[100%] my-3 text-white rounded-full bg-gradient-to-r from-purple-500 to-pink-500'
                        onClick={handleCartAction}
                    >
                        {isProductInCart(productInfo._id) ? 'Remove from Cart' : 'Add to Cart'}
                    </button>
                    <div>
                        <p className='my-4 font-semibold text-lg'>Delivery</p>
                        <div>
                            <p className='my-4'>Instant Download</p>
                            <p className='my-4'>
                                All files will be made available for download once payment has been made. 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewProduct;
