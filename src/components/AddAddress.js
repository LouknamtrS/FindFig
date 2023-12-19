import React, { useState, useEffect } from "react";
import '../Pages/Address/Address';
import './AddressPopUp.css';
import { useLocation } from "react-router-dom";

export default function AddAdress(props){
    const [receiverName, setReceiverName] = useState();
    const [tel, setTel] = useState();
    const [address, setAddress] = useState();

    

    const userEmail = window.localStorage.getItem("userEmail");

    // useEffect(() => {
    //     if (receiverName != null && tel != null && address != null) {
    //         console.log(location);
    //         setReceiverName(location.state.receiverName);
    //         setTel(location.state.tel);
    //         setAddress(location.state.address);
    //     }
    //     console.log(location);
    // }, []);

    

    const InsertData = async() => {
        //GetUser();
        console.log(receiverName, tel, address);
        await fetch("http://localhost:5000/addAddress", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                
            },
            body: JSON.stringify({
                email: userEmail,
                receiverName: receiverName, 
                tel: tel, 
                address: address,
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.data);
            setAddress(data.data);
        })   
    }

    const UpdateData = async () => {
        await fetch("http://localhost:5000/editAddress", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                
            },
            body: JSON.stringify({
                email: userEmail,
                receiverName: receiverName, 
                tel: tel, 
                address: address,
            })
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data.data);
            setAddress(data.data);
        })
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.userData.UserAddresses != undefined) {
            UpdateData();
<<<<<<< Updated upstream
            console.log("Update");
        }
        else {
            InsertData();
            console.log("Inssert");
        }
        
        props.setTrigger(false);
        window.location.reload(false);
=======
        }
        else {
            InsertData();
        }
        window.location.reload(false);
        props.setTrigger(false);
>>>>>>> Stashed changes
        
    }

    

    function ClosePopUp() {
        props.setTrigger(false);
    }
    return (props.trigger) ? (
        <div className="popup-panel">
            <div className="popup-address-frame">
                <form onSubmit={handleSubmit}>
                {/* <form> */}
                    <div className="popup-address-field">
                        <div className="popup-address-header">
                            <h1>New Address</h1>
                        </div>
                        <div className="user-info">
                            <input 
                                className="input name" 
                                type="text"
                                placeholder="Name-Lastname" 
                                onChange={(e)=> setReceiverName(e.target.value)}
                                autoComplete="off"
                            ></input>
                            <input 
                                className="input tel" 
                                type="text"
                                placeholder="Tel."
                                onChange={(e)=> setTel(e.target.value)}
                                autoComplete="off"
                            ></input>
                        </div>
                        <textarea 
                            className="input-popup-address" 
                            type="text"
                            placeholder="House number, Street, Sub district, District, Province, Postcode"
                            onChange={(e)=> setAddress(e.target.value)}
                            autoComplete="off"
                        ></textarea>
                    </div>
                    <div className="button-field">
                        <button className="cancel-btn" type="button" onClick={ClosePopUp}>
                            Cancel
                        </button>
                        <button className="submit-btn" type="submit">
                            Submit
                        </button>
                        {/* <button className="submit-btn" type="button" onClick={() => InsertData()}>
                            Submit
                        </button> */}
                    </div>
                </form>
            </div>
        </div>
    ) : "";
}