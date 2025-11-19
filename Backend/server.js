const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')

const app=express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/bookstore",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(()=>console.log('Connected Successfully'))
.catch((e)=>console.error(e,"Connection Failed"));

const Routes=require('./routes/bookroutes');
app.use('/api/books',Routes);

const authRoutes = require('./routes/authRoutes');
app.use('/api/auth', authRoutes);


app.get('/',(req,res)=>{
    res.send("Welcome to the Book Store API")
});

app.listen(5000,()=>{
    console.log("http://localhost:5000")
})
