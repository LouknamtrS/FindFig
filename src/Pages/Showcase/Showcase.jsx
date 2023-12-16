import React from "react";
import axios from "axios";
import { useEffect,useState } from "react";
import "./Showcase.css";
import Nav from "../../components/Nav/Nav";

function Showcase(){
    return(
        <div id="wrapper">
            <header id="header">
                <Nav topic="Showcase"
                back="https://cdn.discordapp.com/attachments/787359617280770051/1183513820220629092/3.png?ex=65889c23&is=65762723&hm=b608f4b0dafa79e069345c1fd46fb2256b13299db710a859f027b85295bcbe44&"
                account="https://cdn.discordapp.com/attachments/787359617280770051/1183513819427913778/1.png?ex=65889c23&is=65762723&hm=285dc6cb6f325e96a63deb650d157bb45a6fddce1731e5766d15215239f0685b&"
                cart="https://cdn.discordapp.com/attachments/787359617280770051/1183513819981549639/2.png?ex=65889c23&is=65762723&hm=db11b00f36b56189d04437dad86744125c2456a9d7e4b7e95cc617f33e2e8efb&"
                ></Nav>
            </header>
            <div className="mainbody">
                <div className="tab" id="tab-container">
                      <div className="tabs-titles">
                        <button className="tablinks " onClick={(event) => openTab(event, 'showcase')}><span>Showcase</span></button>
                        <button className="tablinks " onClick={(event) => openTab(event, 'wishlist')}><span>Wishlist</span></button>
                      </div> 
                    </div>
            </div>
       </div>
    )
}
function openTab(evt, tabName) {
    var i, tabContent, tablinks;
    // Hide all tabs
    tabContent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabContent.length; i++) {
      tabContent[i].style.display = "none";
    }
    // Remove the "active" class from all tab links
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].classList.remove("active");
    }
    // Show the clicked tab
    document.getElementById(tabName).style.display = "block";
    // Add the "active" class to the clicked tab link
    evt.currentTarget.classList.add("active");
  }

export default Showcase;