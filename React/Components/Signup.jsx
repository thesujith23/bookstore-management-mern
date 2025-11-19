import axios from "axios";
import React, { useState } from "react";

function Signup({onSignUpSuccess,switchToLogin}){
    const [username,setUsername]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");

    const register=async(e)=>{
        e.preventDefault();
        try{
            const res=await axios.post('http://localhost:5000/api/auth/register',{
                username,password,email
            });
            alert('Registration Successfull');
            switchToLogin();
        }catch(err){
            console.error(err);
            alert("Signup failed — user may already exist.");
        }
    }

    return(
        <>
        <h2>SignUp</h2>
        <form onSubmit={register}>
        <input type="username" placeholder="Enter the Username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
        <input type="email" placeholder="Enter the Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="password" placeholder="Enter the Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button >SignUP</button>
        </form>

          <p>
        Already have an account?{" "}
        <span style={{ color: "blue", cursor: "pointer" }} onClick={switchToLogin}>
          Login here
        </span>
      </p>
        </>
    )
}
export default Signup;