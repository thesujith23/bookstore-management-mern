const express=require('express')
const router=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../models/user')

router.post('/register',async(req,res)=>{
    try{
        const {username,email,password} =req.body;
        const existingUser=await User.findOne({email});
        if(existingUser){
            return res.status(400).json({Message:'User Already Existing'});
        }
        const hashedPassword=await bcrypt.hash(password,10);
        const newUser=new User({
            username,password:hashedPassword,email
        });
        await newUser.save();
        res.status(201).json(   {Message:"User Registration Succesfully"});
    }catch(err){
        console.error(err)
        res.status(500).json({Message:"Registration Falied"})
    }
});

router.post('/login',async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await User.findOne({email});
        if (!user) return res.status(404).json({Message:'User Not Found'});

        const Ismatch=await bcrypt.compare(password,user.password);
        if(!Ismatch) return res.status(404).json({Message:"Invalid Password"});

        const token=jwt.sign(
            {
                id:user._id,username:user.username
            },"jwt_secret_key",{expiresIn:'1h'}
        );

        res.status(201).json({message:'Login Successfully',token:token});
    
    }catch(err){
        res.status(500).json({error:"Login Failed"})
    }
});

module.exports=router;