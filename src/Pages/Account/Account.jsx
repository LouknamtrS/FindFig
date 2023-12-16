import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import "./Account.css";
import Nav from "../../components/Nav/Nav";

function Account(){
    return(
        <div id="wrapper">
             <header id="header">
                <Nav topic="Account"
                back="https://cdn.discordapp.com/attachments/787359617280770051/1183513820220629092/3.png?ex=65889c23&is=65762723&hm=b608f4b0dafa79e069345c1fd46fb2256b13299db710a859f027b85295bcbe44&"
                account="https://cdn.discordapp.com/attachments/787359617280770051/1183513819427913778/1.png?ex=65889c23&is=65762723&hm=285dc6cb6f325e96a63deb650d157bb45a6fddce1731e5766d15215239f0685b&"
                cart="https://cdn.discordapp.com/attachments/787359617280770051/1183513819981549639/2.png?ex=65889c23&is=65762723&hm=db11b00f36b56189d04437dad86744125c2456a9d7e4b7e95cc617f33e2e8efb&"
                ></Nav>
            </header>
            <div className="mainbody">
                <div style={{padding:"30px"}} className="flex">
                    <div>
                        <img class="profileimg circle" src="https://lh3.googleusercontent.com/a/ACg8ocJYhJNncvfLqg7Y6AwgWkB2OgnHrSjdARzV6-T5jIpSHZGR=s96-c" alt=""/>
                    </div>
                    <div style={{width:"15px"}}></div>
                    <div>
                        <div style={{height:"5px"}}></div>
                        <div></div>
                        <div style={{padding:"10px"}}></div>
                        <div>
                            <p>Username</p>
                            <p>email</p>
                        </div>
                    </div>

                </div>
                <div style={{padding:"15px"}}>
                <div className="border-top11"></div>
                <div style={{height:"30px"}}></div>
                <div className="flex">
                    <div className="flex-1 center" onclick="location.href='history.php'">
                        <img className="icon-profile-menu" src="assets/my orders.svg" alt=""/>
                        <div className="text-profile-menu">my orders</div>
                    </div>
                    <div className="flex-1 center" onclick="location.href='mycloset.php'">
                        <img className="icon-profile-menu" src="assets/my closet.svg" alt=""/>
                        <div className="text-profile-menu">my showcase</div>
                    </div>
                    <div class="flex-1 center" onclick="location.href='address.php'">
                        <img class="icon-profile-menu" src="assets/address.svg" alt=""/>
                        <div class="text-profile-menu">my address</div>
                    </div>
                </div>
                <div style={{height:"30px"}}></div>
                <div className="flex">
                    <div className="flex-1 center" onclick="location.href='notifications.php'">
                        <img class="icon-profile-menu" src="assets/notifications3.svg" alt=""/>
                        <div class="text-profile-menu">notifications</div>
                    </div>
                    <div class="flex-1 center" onclick="location.href='changepassword.php'">
                        <img class="icon-profile-menu" src="assets/change password.svg" alt=""/>
                        <div class="text-profile-menu">Sell</div>
                    </div>                       
                    <div class="flex-1 center" onclick="location.href='changepassword.php'">
                        <img class="icon-profile-menu" src="assets/change password.svg" alt=""/>
                        <div class="text-profile-menu">Setting</div>
                    </div>          
       
                </div>
                <div style={{height:"30px"}}></div>
                </div>
                <div style={{height:"40px"}}></div>
                <div className="border-top11"></div>
                <div style={{height:"20px"}}></div>
                <div style={{paddingLeft:"20px"}} >
                    <div className="font09 bold500" onclick="location.href='termsservice.php'">terms of services</div>
                    <div style={{height:"5px"}}></div>
                    <div className="font09 bold500" onclick="location.href='policy.php'">privacy policy</div>
                    <div style={{height:"5px"}}></div>
                    <div className="font09 bold500" onclick="location.href='aboutus.php'">about us</div>
                </div>
                
                <div style={{height:"10px"}}></div>
                <button type="button" className="button-28" onclick="location.href='../php/logout.php?logout=1'">
                    logout
                </button>
                <div style={{height:"50px"}}></div>
            </div>
</div>
    )


}

export default Account;
