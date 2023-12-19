import React from "react";
import { useState, useEffect } from "react";
import './Cart.css';
import Nav from "../../components/Nav/Nav";
import CartItems from "../../components/CartItems/CartItems";
import UserAdress from "../../components/Address-comp/UserAddress";
import AddAddress from "../../components/AddAddress";

function Cart(){
    const [addPopUp, setAddPopUp] = useState(false);
    const [userData, setUserData] = useState();
    const [receiverName, setReceiverName] = useState();
    const [tel, setTel] = useState();
    const [address, setAddress] = useState();

    const userEmail = window.localStorage.getItem("userEmail");

    useEffect(() => {
        fetch("http://localhost:5000/getUserForAddress", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                
            },
            body: JSON.stringify({
                email: userEmail
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.UserAddresses);
            setReceiverName(data.UserAddresses[0].receiverName);
            setTel(data.UserAddresses[0].tel);
            setAddress(data.UserAddresses[0].address);            
            setUserData(data);
        })
        
    }, []);
    


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
                { 
                    window.localStorage.getItem("userReceiverName") !== null ? 
                        <UserAdress 
                            receiverName={window.localStorage.getItem("userReceiverName")} 
                            tel={window.localStorage.getItem("userTel")} 
                            address={window.localStorage.getItem("userAddress")}
                        ></UserAdress> 
                    : 
                    <div className="warning-zone">
                        <button className="add-address-from-cart" onClick={() => setAddPopUp(true)}></button>
                    </div>
                }
                
                <CartItems></CartItems>
                </div>
            </main>
            <AddAddress trigger={addPopUp} setTrigger={setAddPopUp} userData={userData}></AddAddress>
        </div>


    );
}

export default Cart;