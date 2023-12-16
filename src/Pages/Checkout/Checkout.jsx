import React from "react";
import './Checkout.css';
import Nav from "../../components/Nav/Nav";

function Checkout(){
    return(
        <div id="wrapper">
             <header id="header">
                <Nav topic="Your order"
                back="https://cdn.discordapp.com/attachments/787359617280770051/1183513820220629092/3.png?ex=65889c23&is=65762723&hm=b608f4b0dafa79e069345c1fd46fb2256b13299db710a859f027b85295bcbe44&"
                account="https://cdn.discordapp.com/attachments/787359617280770051/1183513819427913778/1.png?ex=65889c23&is=65762723&hm=285dc6cb6f325e96a63deb650d157bb45a6fddce1731e5766d15215239f0685b&"
                cart="https://cdn.discordapp.com/attachments/787359617280770051/1183513819981549639/2.png?ex=65889c23&is=65762723&hm=db11b00f36b56189d04437dad86744125c2456a9d7e4b7e95cc617f33e2e8efb&"
                ></Nav>
            </header>
            <main id="mainbody">
                <div className="layoutmain">
                <div id="content" className="large-12 col" role="main"></div>
                <div className="box-address">
                    <div className="flex-1">
                        <div className="flex centerY">
                            <img className="icon-address" src="https://cdn.discordapp.com/attachments/787359617280770051/1184556736317763604/location.png.png?ex=658c676d&is=6579f26d&hm=c13c3501c698cce5a632280463edf40b70dd1034aeaf6fbcc0a37df06459dc93&" alt=""/>
                            <div style={{marginLeft:"7px"}}>delivery address</div>
                        </div>
                        <div style={{height: "10px"}}></div>
                        <div className="box-sud-address">
                            <div style={{fontWeight:"bold"}}>เลือกที่อยู่จัดส่ง</div>
                        </div>
                        <div style={{height:"10px"}}></div>
                    </div>
                    <div>
                        <img className="chevron-right-cart" src="https://cdn.discordapp.com/attachments/787359617280770051/1184557596636618873/chevron-right.png?ex=658c683b&is=6579f33b&hm=83d307843e0a33e051089b25d1321792b7201e5364e40da097ac66b8ed7d55f1&" alt=""/>
                    </div>
                </div>
                <div style={{height:"20px"}}></div>
                <div>your items</div>
                <div style={{height:"15px"}}></div>
                <div class="box-item-cart">
                    <div class="checkbox-wrapper-18">
                        <div class="round">
                            <input type="checkbox" id="checkbox-18" />
                            <label for="checkbox-18"></label>
                        </div>
                    </div>
                    <img className="item-cart" src="https://looperr.b-cdn.net/s5463/s5463%208Dec23/20231208-1263.jpg" alt=""/>
                    <div>
                        <div className="h-item-cart">tops</div>
                        <div style={{height:"10px"}}></div>
                        <div>Size : XL</div>
                        <div style={{height: "5px"}}></div>
                        <div className="h-item-cart">THB 400 </div>
                        <div style={{height: "5px"}}></div>
                    </div>
                </div>
                
                <div style={{height:"15px"}}></div>
                <div className="bold500">order summary</div>
                <div style={{height:"10px"}}></div>
                <div className="summary-box">
                    <div className="box-pice">
                        <div>
                            <div className="flex">
                            <div className="flex-1">tops, timberland</div>
                            <div>400 THB</div>
                        </div>
                        <div style={{height:"10px"}}></div>
                    </div>
                    <div style={{height:"10px"}}></div>
                    </div>
                    <div className="box-pice">
                        {/* <div className="flex colorsale">
                            <div className="flex-1">discount :  </div>
                            <div>-0 THB</div>
                        </div> */}
                        <div style={{height:"10px"}}></div>
                        <div className="flex">
                            <div className="flex-1">shipping fee</div>
                            <div>50 THB</div>
                        </div>
                    </div>
                    <div style={{height:"10px"}}></div>
                    <div className="box-sale-1 bold500">
                         <div className="flex">
                            <div className="flex-1">Total</div>
                            <div>750 THB</div>
                        </div>
                    </div>
                </div>
                <div style={{height:"150px"}}></div>
                <div className="boxcart">
                    <a href="/ordercomplete"><button className="btn-cart button-28" type="button">check out</button></a>
                </div>
                </div>
            </main>
        </div>


    );
}

export default Checkout;