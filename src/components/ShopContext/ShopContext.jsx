import React, {createContext} from "react";
import data_product from "../../db/figuredb";

export const ShopContext = createContext(null);

const ShopContextProvider = (props) =>{
    const contextValue = {data_product};
    console.log("Data Product:", data_product);
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>

    )
}
export default ShopContextProvider;