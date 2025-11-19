const express=require('express');
const router=express.Router();
const Book=require('../models/book')
const authMiddleware = require("../middleware/authMiddleware");

// Apply to all book routes:
router.use(authMiddleware);

router.get('/',async(req,res)=>{
    const Allbooks=await Book.find()
    res.json(Allbooks)
});

router.post('/',async(req,res)=>{
    const {title,author}=req.body;
    const newbook=new Book({title,author});
    await newbook.save();
    res.json(newbook);
});

router.delete('/:id',async(req,res)=>{
    const deleted=await Book.findByIdAndDelete(req.params.id);
    res.json({message:"Book deleted successfully"})
});

module.exports=router;