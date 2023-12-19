import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ShopContext = createContext(null);
const getDefaultCart = (data_products) => {
<<<<<<< HEAD
  let cart = [];
=======
  let cart = {};
>>>>>>> 7f87dc3ce0f9aa6a8e4e2d9af7d43b81ad9c48ff
  data_products.forEach((item) => {
    // Check if item.id is not null before assigning to cart
    if (item.id !== null) {
      cart[item.id] = 0;
    }
  });
  return cart;
};


const ShopContextProvider = (props) => {
  const [data_products, setDataProducts] = useState([]);
  const [cartItems, setCartItems] = useState(getDefaultCart(data_products));

  useEffect(() => {
    axios
      .get('http://localhost:5000/getdata')
      .then((response) => {
        setDataProducts(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

<<<<<<< HEAD
=======
  
>>>>>>> 7f87dc3ce0f9aa6a8e4e2d9af7d43b81ad9c48ff
  useEffect(() => {
    const storedCartItems = localStorage.getItem('cartItems');
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    } else {
<<<<<<< HEAD
      // Initialize cartItems with default values if storedCartItems is null
=======
>>>>>>> 7f87dc3ce0f9aa6a8e4e2d9af7d43b81ad9c48ff
      setCartItems(getDefaultCart(data_products));
    }
  }, [data_products]);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);
<<<<<<< HEAD
=======

  // const addToCart = (itemId) => {
  //   // Find the product with the given itemId
  //   const product = data_products.find((p) => p.id === itemId);
  
  //   if (product) {
  //     // Check if the incremented quantity exceeds the stock limit
  //     if (cartItems[itemId] < product.stock) {
  //       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  //     } else {
  //       // Handle the case where the quantity exceeds the stock limit
  //       console.log(`Cannot add more of ${product.name} to the cart. Stock limit reached.`);
  //     }
  //   }
  // };
>>>>>>> 7f87dc3ce0f9aa6a8e4e2d9af7d43b81ad9c48ff
  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  
  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const updatedQuantity = Math.max(prev[itemId] - 1, 0); // Ensure quantity doesn't go below 0
      return { ...prev, [itemId]: updatedQuantity };
    });
  };
  
  const getTotalCartAmount = () => {
    let totalAmount = 0;
  
<<<<<<< HEAD
    // console.log('data_products', data_products);
=======
    console.log('data_products', data_products);
>>>>>>> 7f87dc3ce0f9aa6a8e4e2d9af7d43b81ad9c48ff
  
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = data_products.find((product) => product.id === String(itemId));

  
<<<<<<< HEAD
        // console.log('itemId', itemId);
        // console.log('itemInfo', itemInfo);
  
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[itemId];
          // console.log('item info . price', itemInfo.price);
          // console.log('item info', itemInfo);
        }
      }
  
      // console.log('total amount', totalAmount);
=======
        console.log('itemId', itemId);
        console.log('itemInfo', itemInfo);
  
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[itemId];
          console.log('item info . price', itemInfo.price);
          console.log('item info', itemInfo);
        }
      }
  
      console.log('total amount', totalAmount);
>>>>>>> 7f87dc3ce0f9aa6a8e4e2d9af7d43b81ad9c48ff
    }
  
    return totalAmount;
  };
  
  
  
  
  const contextValue = { getTotalCartAmount,data_products, cartItems, addToCart, removeFromCart };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
