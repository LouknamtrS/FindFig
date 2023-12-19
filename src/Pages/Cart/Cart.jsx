import React from "react";
import { useState, useEffect } from "react";
import './Cart.css';
import Nav from "../../components/Nav/Nav";
import CartItems from "../../components/CartItems/CartItems";
import UserAdress from "../../components/Address-comp/UserAddress";
<<<<<<< HEAD
import { useState,useEffect } from "react";
import AddAdress from "../../components/icon/AddAddress";

=======
import AddAddress from "../../components/AddAddress";
>>>>>>> 7f87dc3ce0f9aa6a8e4e2d9af7d43b81ad9c48ff

function Cart(){
    const [addPopUp, setAddPopUp] = useState(false);
    const [userData, setUserData] = useState();
    const [receiverName, setReceiverName] = useState();
    const [tel, setTel] = useState();
    const [address, setAddress] = useState();
<<<<<<< HEAD
    const userEmail = window.localStorage.getItem("userEmail");
=======

    const userEmail = window.localStorage.getItem("userEmail");

>>>>>>> 7f87dc3ce0f9aa6a8e4e2d9af7d43b81ad9c48ff
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
<<<<<<< HEAD
            setReceiverName(data.UserAddresses.receiverName);
            setTel(data.UserAddresses.tel);
            setAddress(data.UserAddresses.address);            
            setUserData(data);
        })
    }, []);
=======
            setReceiverName(data.UserAddresses[0].receiverName);
            setTel(data.UserAddresses[0].tel);
            setAddress(data.UserAddresses[0].address);            
            setUserData(data);
        })
        
    }, []);
    


>>>>>>> 7f87dc3ce0f9aa6a8e4e2d9af7d43b81ad9c48ff
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
<<<<<<< HEAD
                    receiverName != undefined ? 
                        <UserAdress 
                            receiverName={receiverName} 
                            tel={tel} 
                            address={address}
                        ></UserAdress> 
                    : 
                    <div className="warning-zone">
                        <button className="add-address-from-cart" onClick={() => setAddPopUp(true)}>
                            <img src="https://cdn.discordapp.com/attachments/787359617280770051/1185630381899255951/Plus-icon.png?ex=65904f56&is=657dda56&hm=1bac260712735a13c2436dd6984a82f3b322fd79916f71d75680bf8e2cf6c1c9&"></img>
                            Add Address
                        </button>
                    </div>
                }
                <CartItems></CartItems>
                </div>
            </main>
            <AddAdress trigger={addPopUp} setTrigger={setAddPopUp}></AddAdress>
    
=======
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
>>>>>>> 7f87dc3ce0f9aa6a8e4e2d9af7d43b81ad9c48ff
        </div>


    );
}

export default Cart;