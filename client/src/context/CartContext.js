import { createContext, useReducer, useEffect } from 'react';

export const CartContext = createContext();

const initialState = {
    products: [],
    total: 0,
};

// Load cart from local storage
const loadCartFromLocalStorage = () => {
    const cartData = localStorage.getItem('cart');
    if (cartData) {
        return JSON.parse(cartData);
    }
    return initialState;
};

export const CartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                products: [...state.products, action.payload],
                total: state.total + action.payload.price
            };
        case 'REMOVE_FROM_CART':
            const filteredProducts = state.products.filter(
                product => product._id !== action.payload._id
            );
            const removedProduct = state.products.find(
                product => product._id === action.payload._id
            );
            return {
                ...state,
                products: filteredProducts,
                total: state.total - (removedProduct ? removedProduct.price : 0)
            };
        case 'CLEAR_CART':
            return {
                ...state,
                products: [],
                total: 0
            };
        default:
            return state;
    }
};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(CartReducer, loadCartFromLocalStorage());

    // Save cart to local storage whenever it changes
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(state));
    }, [state]);

    const addToCart = (product) => {
        dispatch({ type: 'ADD_TO_CART', payload: product });
    };

    const removeFromCart = (product) => {
        dispatch({ type: 'REMOVE_FROM_CART', payload: product });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR_CART' });
    };

    const isProductInCart = (productId) => {
        return state.products.some(product => product._id === productId);
    };

    return (
        <CartContext.Provider value={{ cart: state, addToCart, removeFromCart, clearCart, isProductInCart }}>
            {children}
        </CartContext.Provider>
    );
};
