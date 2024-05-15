import React, { createContext, useState, useEffect } from 'react';
import request from '~/utils/httpRequest';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [all_product, setAll_Product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        request.get('product/allproducts').then((res) => {
            setAll_Product(res.data);
        });

        if (localStorage.getItem('auth-token')) {
            request({
                method: 'post',
                url: 'cart/getcart',
                headers: {
                    Accept: 'application/json', // Correct MIME type for JSON responses
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
            })
                .then((response) => {
                    setCartItems(response.data);
                })
                .catch((error) => {
                    console.error('There was an error!', error);
                });
        }
    }, []);

    const addToCart = (itemId) => {
        if (localStorage.getItem('auth-token')) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));

            request({
                method: 'post',
                url: 'cart/addtocart',
                data: {
                    itemId,
                },
                headers: {
                    Accept: 'application/json',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
            }).then((res) => {
                console.log(res.data);
            });
        }
    };

    const removeFromCart = (itemId) => {
        if (localStorage.getItem('auth-token')) {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));

            request({
                method: 'delete',
                url: 'cart/removefromcart',
                headers: {
                    Accept: 'application/form-data',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                data: {
                    itemId,
                },
            }).then((res) => {
                console.log(res.data);
            });
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem;
    };

    const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems };

    return <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
