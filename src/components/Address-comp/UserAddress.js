import React from "react";
import { useState, useEffect } from "react";
import './UserAddress.css';
<<<<<<< HEAD
import EditAddress from "../icon/EditAddress.";
=======
import EditAddress from '../EditAddress';
>>>>>>> 7f87dc3ce0f9aa6a8e4e2d9af7d43b81ad9c48ff

function UserAdress(props){
    const [editPopUp, setEditPopUp] = useState(false);

    const userEmail = window.localStorage.getItem("userEmail");
    const [receiverName, setReceiverName] = useState();
    const [tel, setTel] = useState();
    const [address, setAddress] = useState();

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
            
            console.log(data);
            if (data.UserAddresses != undefined) {
<<<<<<< HEAD
                console.log(data.UserAddresses);
                setReceiverName(data.UserAddresses.receiverName);
                setTel(data.UserAddresses.tel);
                setAddress(data.UserAddresses.address);
=======
                setReceiverName(data.UserAddresses[0].receiverName);
                setTel(data.UserAddresses[0].tel);
                setAddress(data.UserAddresses[0].address);
>>>>>>> 7f87dc3ce0f9aa6a8e4e2d9af7d43b81ad9c48ff
            }
            
            //setUserData(data);            
            
            
        })
        
    }, []);

    // function DeleteAddress() {
    //     fetch("http://localhost:5000/deleteUserAddress", {
    //         method: "POST",
    //         crossDomain: true,
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json",
                
    //         },
    //         body: JSON.stringify({
    //             email: userEmail
    //         })
    //     })
    //     .then((response) => response.json())
    //     .then((data) => {
    //         console.log(data.UserAddresses);
    //         window.localStorage.setItem("userReceiverName", data.UserAddresses.receiverName);
    //         window.localStorage.setItem("userTel", data.UserAddresses.tel);
    //         window.localStorage.setItem("userAddress", data.UserAddresses.address);
            
    //     })
    //     window.location.reload(false);
    // }

    return (
            receiverName != null &&
            tel != null &&
            address != null
    ) ? (
        <>
            <div className="address-content">
<<<<<<< HEAD
               <div style={{height:"5px"}}></div>
                <hr></hr>
                <div className="address-field">
                   
=======
                <div className="address-field">
>>>>>>> 7f87dc3ce0f9aa6a8e4e2d9af7d43b81ad9c48ff
                    <div className="address-info">
                        <div className="user-info">
                            <div className="receiver-name">
                                { receiverName }
                            </div>
                            <div className="tel">
                                { tel }
                            </div>
                        </div>
                        <div className="user-address">
                            { address }
                        </div>
                    </div>
                    <div className="address-editor">
                        <div className="edit-choice">
                            <u className="edit" onClick={() => setEditPopUp(true)}>Edit</u>
                            {/* <u className="delete" onClick={DeleteAddress}>Delete</u> */}
                        </div>
                        <button className="set-default">Set Default</button>
                    </div>
                </div>
                
                <div class="user-address-line"></div>
            </div>
            <EditAddress trigger={editPopUp} setTrigger={setEditPopUp}></EditAddress>
        </>
    ) : "";
};

export default UserAdress;