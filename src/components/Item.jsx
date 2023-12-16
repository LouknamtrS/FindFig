import React from "react";
import './Item.css'
import { Link } from "react-router-dom";

 
export default function ( props ) {
 return (
    <div className="item m-1">
      <div className="card" >
        <a href={`/products/${props.id}`} className=" text-decoration-none text-black" >
                  <img className="thumb" src={props.thumb} alt=""></img>
                  <div className="itemName">{props.name}</div>
                  <div   style={{textAlign: "center",fontSize:"20px"}} className="item-price col-2 bold300">{props.price} ฿ </div>
                </a>
      

        <button class="button-57  btn-primary" role="button">
          <span class="text">Add to cart</span>
          <span><img style={{width: "30px"}} src="https://cdn.discordapp.com/attachments/787359617280770051/1185583122356654090/3.png?ex=65902353&is=657dae53&hm=e15f7a9def665deeabe26e323753b0f21678d340e4eb7e37c25cd718b3c57d39&"/></span>
        </button>

     </div>
  </div>
);
}