import React, { useContext } from "react";
import { ShopContext } from "../ShopContext/ShopContext";
import { useParams } from "react-router-dom";
import ProductDisplay from "../../Pages/ProductDisplay/ProductDisplay";

const Product = () => {
  const { productID } = useParams();
  const { data_products, isLoading } = useContext(ShopContext);
  
  if (isLoading) {
    return <p>Loading...</p>;
  }
  
  const product = data_products.find((e) => e.id === String(productID));
  
  // Rest of your code...
  

  console.log("Data Products:", data_products);

  console.log("Product ID:", productID);
  console.log("Product:", product);

  return (
    <div>
        <ProductDisplay product={product} />
    </div>
  );
};

export default Product;
