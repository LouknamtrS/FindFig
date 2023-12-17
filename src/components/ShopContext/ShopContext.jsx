import React, {createContext} from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';

export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{
const [data_products, getDataproduct] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/getdata')
      .then((response) => {
        getDataproduct(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

    const contextValue = {data_products};
    console.log("Data Product:", data_products);
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

    )
}
export default ShopContextProvider;