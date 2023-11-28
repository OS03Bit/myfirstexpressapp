const express = require('express');
const app = express();
const port = 8000;

const mongoose = require("mongoose");

const uri = "mongodb+srv://omsinkar03bit:Fbl3e5TcCwECxAWF@cluster0.pi7keto.mongodb.net/?retryWrites=true&w=majority";
// mongoose.set('strictQuery', false);

const start = async() => {
    await mongoose.connect(uri);
    // try{
    //     let c = 
    //     console.log("DB connected");

    // }
    // catch(err){
    //     console.log(err); 
    // }
}
start()

const blog = new mongoose.Schema({
    name:{
        type: String,
    },
    message:{
       type: String 
    },
});

const Blog = mongoose.model('Blog', blog);
module.exports = Blog;

const bodyParser = require('body-parser'); //form

app.use(bodyParser.urlencoded({extended: false}));// form
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', './');


// const blog = [];

app.get('/', async (req, res)=>{
    const data = await Blog.find();
    return res.render('index', {data});
})


app.post('/amn', async(req, res)=>{
    console.log(req.body);
    let c = req.body;
    await Blog.create(c);
    return res.redirect('back');
})

app.listen(port, function(err){
    if(err){
        console.log(err);
    }
    console.log(`Server running at port ${port}`);
});
