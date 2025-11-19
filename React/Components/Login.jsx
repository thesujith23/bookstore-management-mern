import axios from "axios";
import React from "react";
import { useState } from "react";

function Login({onLoginSuccess,switchToSignup}){
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const HandleSubmit=async (e)=>{
    e.preventDefault();
    try{
      const res=await axios.post("http://localhost:5000/api/auth/login",{
        email,
        password
      });
      localStorage.setItem("token",res.data.token);
      onLoginSuccess();
    }catch(err){
      alert("Invalid Email or Password")
    }

  }
  return(
    <div className="auth-container">
      <form onSubmit={HandleSubmit}>
        <h2>LOGIN</h2>
        <input type="email" placeholder="Enter the email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Enter the password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button type="submit">Login</button>
        <br/>
      </form>
      
      <p className="switch-text">
        Don't have an account? <span onClick={switchToSignup}>Create one</span>
      </p>

    </div>

  )
}
export default Login;