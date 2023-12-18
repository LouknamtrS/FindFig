import React from "react";
import './Cart.css';
import Nav from "../../components/Nav/Nav";
import CartItems from "../../components/CartItems/CartItems";

function Cart(){
    return(
        <div id="wrapper">
             <header id="header">
                <Nav topic="My Cart"
                back="https://cdn.discordapp.com/attachments/787359617280770051/1183513820220629092/3.png?ex=65889c23&is=65762723&hm=b608f4b0dafa79e069345c1fd46fb2256b13299db710a859f027b85295bcbe44&"
                account="https://cdn.discordapp.com/attachments/787359617280770051/1183513819427913778/1.png?ex=65889c23&is=65762723&hm=285dc6cb6f325e96a63deb650d157bb45a6fddce1731e5766d15215239f0685b&"
                cart="https://cdn.discordapp.com/attachments/787359617280770051/1183513819981549639/2.png?ex=65889c23&is=65762723&hm=db11b00f36b56189d04437dad86744125c2456a9d7e4b7e95cc617f33e2e8efb&"
                ></Nav>
            </header>
            <main id="mainbody">
                <div className="layoutmain">
                <div id="content" className="large-12" role="main"></div>
                <CartItems></CartItems>
                </div>
            </main>
        </div>


    );
}

export default Cart;