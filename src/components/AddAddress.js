import React from "react";
import './AddAddress.css'

function AddAdress(props){
    function CloseePopUp() {
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