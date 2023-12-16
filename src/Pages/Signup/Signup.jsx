import React, { useState } from "react";
import './Signup.css';
import Nav from "../../components/Nav/Nav";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Signup(){
  const [username, setuserName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:5000/register',{username,email,password})
    .then(response => {
      console.log(response);
      navigate('/login');
  })
  .catch(error => {
      console.error(error);
  });
  }


  return (
    <div id='wrapper'>
      <header id="header sign-up">
        <Nav topic="Sign up"
        back="https://cdn.discordapp.com/attachments/787359617280770051/1183513820220629092/3.png?ex=65889c23&is=65762723&hm=b608f4b0dafa79e069345c1fd46fb2256b13299db710a859f027b85295bcbe44&"
        account="https://cdn.discordapp.com/attachments/787359617280770051/1183513819427913778/1.png?ex=65889c23&is=65762723&hm=285dc6cb6f325e96a63deb650d157bb45a6fddce1731e5766d15215239f0685b&"
        cart="https://cdn.discordapp.com/attachments/787359617280770051/1183513819981549639/2.png?ex=65889c23&is=65762723&hm=db11b00f36b56189d04437dad86744125c2456a9d7e4b7e95cc617f33e2e8efb&"
        ></Nav>
      </header>
      <div id="mainbody">
            <div className="layoutmain">
            <div style={{height:"10px"}}></div>
                <div className="bold500 font08 center flex centerY centerX">
                    <div style={{fontSize:"15px"}}>Wellcome back!</div>
                </div>
                    <form onSubmit={handleSubmit}>
                    <div style={{height:"30px"}}></div>
                        <div className="flex">
                          <a href='/login'>
                            <button type="button" className="btn-menu-lopgin-l1 flex-1" style={{width:"100%"}}>log in</button>
                          </a>
                          <a href='/signup'>
                            <button type="button" className="btn-menu-lopgin-R1 flex-1" style={{width:"100%"}}>sign up</button>
                          </a>
                            
                        </div>
                        <div style={{height:"30px"}}></div>
                        <div className="box-input-address">
                            <input className="input-login" type="text" placeholder="username" name="username" id="username" required="" onChange={(e)=> setuserName(e.target.value)}/>
                        </div>
                        <div className="box-input-address">
                            <input className="input-login" type="text" placeholder="email" name="email" id="email" required=""  onChange={(e)=> setEmail(e.target.value)} />
                        </div>
                        <div className="box-input-address">
                            <input className="input-login" type="password" placeholder="password" name="password" id="password"  onChange={(e)=> setPassword(e.target.value)}/>
                        </div>
                        <div style={{height:"10px"}}></div>
                        <div className="flex">
                            <div className="flex-2" style={{flexGrow:"2"}}></div>
                            <a className="a-login" style={{width:"180px"}}>Terms of Service</a>
                        </div>
                        <div style={{height:"20px"}}></div>
                        <button className="button-28" type="submit" name="submit" value="register">Regiser</button>
                    
                    </form>
                </div>
                <div style={{height:"50px"}}></div>
            </div>
        </div>
  );


};
export default Signup;