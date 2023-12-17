const express = require('express');
const router = express.Router();
const UserModel = require('../model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const verifyUser = (req,res,next) =>{
    const token = req.cookies.token;

    if (!token) {
        return res.status(401).json("The token was not available");
    }else{
        jwt.verify(token,"jwt-secret-key",(err,decoded)=>{
            if(err) return res.json("Token is wrong")
            next();
        })
    }
}


router.route("/", verifyUser).get((req, res) => {
    return res.json("Success");
});
router.route("/register").post((req, res) => {
    const {username, email, password} = req.body;
    bcrypt.hash(password,10)
    .then(hash=>{
        UserModel.create({username, email,password:hash})
        .then(user => res.json(user))
        .catch(err => res.json(err))
    }).catch(err => console.log(err.message))


});

router.route("/login").post((req,res)=>{
    const{email,password}= req.body;
    UserModel.findOne({email:email})
    .then(user=>{
        if(user){
            bcrypt.compare(password, user.password,(err, response)=>{
                if(response){
                    const token = jwt.sign({email: user.email},"jwt-secret-key",{expiresIn:"1d"})
                    res.cookie("token",token);
                    res.json("Success")
                }else{
                    res.json("the password is incorrect")
                }
            })
        }else{
            res.json("No record existed")
        }
        
    })
})
router.route("/getprofile").get((req,res)=>{
    UserModel.find()
    .then(user=> res.json(user))
    .catch(err=> res.json(err))
})

module.exports = router;
