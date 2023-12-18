import React, { useContext, useEffect, useState } from "react";
import './CartItems.css';
import { ShopContext } from "../ShopContext/ShopContext";
import remove_icon from '../Assets/remove.png';

const CartItems = () => {
  const {getTotalCartAmount, data_products, removeFromCart } = useContext(ShopContext);
  const storedCartItems = JSON.parse(localStorage.getItem('cartItems'));
  const [cartItems, setCartItems] = useState(storedCartItems);

  console.log(cartItems);
  console.log(data_products);

  return (
    <div className="cartitems">
      <div className="cartitems-format-main">
        <p>Items</p>
        <p>Titles</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
    
      {data_products && data_products.length > 0 ? (
        data_products.map((e) => {
          if (cartItems && cartItems[e.id] > 0) {
            return (
              <div key={e.id}>
                <div className="cartitems-format cartitems-format-main">
                  <img src={e.thumb} alt="" className="cart-product-icon" />
                  <p>{e.name}</p>
                  <p>{e.price}THB</p>
                  <button className="cartitems-quantity">{cartItems[e.id]}</button>
                  <p>{e.price * cartItems[e.id]}</p>
                  <p><img  src={remove_icon} onClick={() => { removeFromCart(e.id) }} alt="" className="cart-remove"/></p>
                </div>
              </div>
            );
          }
          return null;
        })
      ) : (
        <p>No items in the cart</p>
      )}
      
      <div style={{height:"10px"}}></div>
      <div style={{height:"10px"}}></div>
    <div>

    </div>
        <div className="summary-box">
        <div className="bold500"  style={{fontSize:"20px"}}>order summary</div>
        
            <div className="box-pice">
                <p>Subtotal</p>
                <p>THB{getTotalCartAmount()}</p>
            </div>
            <div className="box-pice">
                <p>Shipping fee</p>
                <p>Free</p>
            </div>
            <div className="box-pice box-sale-1 bold500">
                    <p>Total</p>
                    <p>THB{getTotalCartAmount()}</p>
            </div>
        </div>
        <div style={{height:"15px"}}></div>

        <div style={{height:"150px"}}></div>
        <div className="boxcart">
            <a href="/checkout"><button className="btn-cart button-28" type="button">check out</button></a>
        </div>
  </div>
  
  );
};

export default CartItems;
