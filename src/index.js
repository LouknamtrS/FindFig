import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import ShopContextProvider from "./components/ShopContext/ShopContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
root.render(
    <ShopContextProvider><App/></ShopContextProvider>

);