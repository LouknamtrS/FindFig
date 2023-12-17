const express = require('express');
const router = express.Router();
const collection = require("../model/figuredata");

router.route("/getdata").get((req, res) => {
   collection.find()
   .then(data_products=> res.json(data_products))
   .catch(err=> res.json(err))
});
module.exports = router;