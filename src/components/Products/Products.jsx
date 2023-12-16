import React, { useContext } from "react";
import { ShopContext } from "../ShopContext/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../../Pages/ProductDisplay/ProductDisplay";

const Product = () =>{
  const {data_product}= useContext(ShopContext);
  const {productID} = useParams();
  const product = data_product.find((e)=>e.id === Number(productID)); 
  console.log("Product:", product);  
  console.log("Product ID:", productID);
  return(
    <div>
      <ProductDisplay product = {product}/>
    </div>
  )
}
export default Product