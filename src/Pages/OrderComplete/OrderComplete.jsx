import React from "react";
import Nav from "../../components/Nav/Nav";
import './OrderComplete.css'

function OrderComplete() {
    return(
        <div id="wrapper-order">
            <header>
            <Nav topic="Order Complete" 
            back="https://cdn.discordapp.com/attachments/787359617280770051/1183513820220629092/3.png?ex=65889c23&is=65762723&hm=b608f4b0dafa79e069345c1fd46fb2256b13299db710a859f027b85295bcbe44&"
            account="https://cdn.discordapp.com/attachments/787359617280770051/1183513819427913778/1.png?ex=65889c23&is=65762723&hm=285dc6cb6f325e96a63deb650d157bb45a6fddce1731e5766d15215239f0685b&"
            cart="https://cdn.discordapp.com/attachments/787359617280770051/1183513819981549639/2.png?ex=65889c23&is=65762723&hm=db11b00f36b56189d04437dad86744125c2456a9d7e4b7e95cc617f33e2e8efb&"
            >
            
            </Nav>
            </header>
            <main id="main">
                <div className="check-mark-container-or1">
                    <div className="wrapper-order-check col "> <svg className="checkmark-ordercp" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52"> <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none"/> <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                        
                        </svg>
                    <h2>Order Complete</h2>
                    </div>  
                                              
                </div>
                
            </main>
        </div>
    )
}

export default OrderComplete;