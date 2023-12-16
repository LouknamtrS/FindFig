const express = require('express');
const router = express.Router();
const sellerRequest = require('../model/SellerModel');

router.route("/Sell").post((req, res) => {
    const newRequire = new sellerRequest({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        barcode: req.body.barcode,
        manufacturer: req.body.manufacturer,
        figureName: req.body.figureName,
        figureGrade: req.body.figureGrade,
        boxGrade: req.body.boxGrade,
        note: req.body.note,
    });

    newRequire.save()
        .then(() => res.json('Seller information added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
