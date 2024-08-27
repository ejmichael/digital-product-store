import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ViewProduct = () => {
    const { productID } = useParams();
    const { addToCart, removeFromCart, isProductInCart } = useContext(CartContext);
    const [productInfo, setProductInfo] = useState(null);

    const getProduct = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/api/products/${productID}`);
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
            <div className='text-xl my-4'>ViewProduct: {productInfo.productName}</div>
            <div className='grid grid-cols-5 gap-4'>
                <div className='col-span-3 gap-4 px-4'>
                    <img className='w-full' src={productInfo.imageUrl} alt={productInfo.productName} />
                </div>
                <div className='col-span-2 px-4'>
                    <p className='text-xl my-4'>{productInfo.productName}</p>
                    <p className='text-slate-600 my-4'>{productInfo.productDescription}</p>
                    <p className='my-4 text-lg'>R {productInfo.price}</p>
                    <button 
                        className='my-4 h-[50px] bg-[#28afe2] w-[100%] my-3 text-white'
                        onClick={handleCartAction}
                    >
                        {isProductInCart(productInfo._id) ? 'Remove from Cart' : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ViewProduct;
