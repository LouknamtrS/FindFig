import React from "react";
import { useState, useEffect } from "react";
import './UserAddress.css';
import EditAddress from '../EditAddress';

function UserAdress(props){
    const [editPopUp, setEditPopUp] = useState(false);

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
            window.localStorage.setItem("userReceiverName", data.UserAddresses.receiverName);
            window.localStorage.setItem("userTel", data.UserAddresses.tel);
            window.localStorage.setItem("userAddress", data.UserAddresses.address);
            
        })
        
    }, []);

    function DeleteAddress() {
        fetch("http://localhost:5000/deleteUserAddress", {
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
            window.localStorage.setItem("userReceiverName", data.UserAddresses.receiverName);
            window.localStorage.setItem("userTel", data.UserAddresses.tel);
            window.localStorage.setItem("userAddress", data.UserAddresses.address);
            
        })
        window.location.reload(false);
    }

    return (
            props.receiverName != null &&
            props.tel != null &&
            props.address != null
    ) ? (
        <>
            <div className="address-content">
                <div className="address-field">
                    <div className="address-info">
                        <div className="user-info">
                            <div className="receiver-name">
                                { props.receiverName }
                            </div>
                            <div className="tel">
                                { props.tel }
                            </div>
                        </div>
                        <div className="user-address">
                            { props.address }
                        </div>
                    </div>
                    <div className="address-editor">
                        <div className="edit-choice">
                            <u className="edit" onClick={() => setEditPopUp(true)}>Edit</u>
                            <u className="delete" onClick={DeleteAddress}>Delete</u>
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