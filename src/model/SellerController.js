const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const router = require("../routes/SellerRoute"); // Corrected path
const path = require('path');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://tsittidet:thereallalune@findfigdb.4gxdoii.mongodb.net/', {
    useNewUrlParser: true
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connected.");
});

// Mount the SellerRoute at the /Sell endpoint
app.use("/", router);



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
});
