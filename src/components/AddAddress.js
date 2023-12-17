import React from "react";
import './AddAddress.css'

function AddAdress(props){
    function CloseePopUp() {
        props.setTrigger(false);
    }
    return (props.trigger) ? (
        <div class="popup-panel">
            <div class="address-frame">
                <div className="address-field">
                    <div class="address-header">
                        <h1>New Address</h1>
                    </div>
                    <div class="user-info">
                        <input class="input name" placeholder="Name-Lastname"></input>
                        <input class="input tel" placeholder="Telephone number"></input>
                        
                    </div>
                    <textarea class="input-address" placeholder="House number, Street, Sub district, District, Province, Postcode"></textarea>
                
                </div>
                <div className="button-field">
                    <button className="cancel-btn" onClick={CloseePopUp}>
                        Cancel
                    </button>
                    <button className="confirm-btn" onClick={CloseePopUp}>
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    ) : "";
};

export default AddAdress;