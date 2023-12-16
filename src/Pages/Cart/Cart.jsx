import React from "react";
import './Cart.css';
import Nav from "../../components/Nav/Nav";

function Cart(){
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
                <div id="content" className="large-12 col" role="main"></div>
                <div style={{height:"20px"}}></div>
                <div>Item</div>
                <div style={{height:"15px"}}></div>

                <div class="box-item-cart">
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
                <div class="box-item-cart">
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
                    <a href="/checkout"><button className="btn-cart button-28" type="button">check out</button></a>
                </div>
                </div>
            </main>
        </div>


    );
}

export default Cart;