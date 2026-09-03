const express = require("express");
const app = express();
// we are connect of his  mongoose
const mongoose = require("mongoose");
const path = require("path");
const chat =  require("./models/chat.js");
const methodOverride = require("method-override");


app.set("views", path.join(__dirname,"views"));
app.set("view engine" , "ejs");

app.use(express.static(path.join(__dirname , "public")));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));

//  now we are doing connection established of mongoodb
main().then( (res) =>{
    console.log("Connection Successfully");
}).catch((err) => {
    console.log(err);
});

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}


let  port = 8000;


// step 3 :  index route
app.get("/chats", async (req,res) => {

    let chats =  await chat.find();
    res.render("index.ejs", { chats});
});

// wstep 4 :  we ar create new route or add new msg or detail

app.get("/chats/new" , (req,res) => {
    res.render("new.ejs");
});

//step 5  we are (create route with the help of POST mehod)

app.post("/chats" ,(req,res) =>{
    let {from , to ,msg} = req.body;

    let newChat = new chat({
        from : from,
        to : to,
        msg : msg,
        created_at: new Date(),
    });

    newChat.save()
    .then((res) => {
        console.log("New Chat is Added");
    }).catch((err) => {
        console.log(err);
    });

    res.redirect("/chats");
});

// step 6 we create edit  route for edit the msg or detail

app.get("/chats/:id/edit" , async  (req,res) => {
    let {id} = req.params;
     let Chat =  await chat.findById(id);
     res.render("edit.ejs", {Chat});
});

// step 7 we are create update route using put req

app.put("/chats/:id" , async (req,res) => {
     let {id} = req.params;
     let{ msg: newMsg} = req.body;

     let updateMsg = await  chat.findByIdAndUpdate(id, {msg: newMsg}, {runValidators: true , new: true});

     console.log("Update Massage Successfully");
     res.redirect("/chats");
});

//STEPP 8 we are create delete route or distroy route
app.delete("/chats/:id" , async (req,res) => {
    let {id} = req.params;
    let deleteMsg =  await  chat.findByIdAndDelete(id);
    res.redirect("/chats");
});

// step 2 :  root rout  create 

app.get("/" , (req,res) => {
    res.send("root server is  working");
});


// step 1 :  check in server run or not run

app.listen(port , () =>{
    console.log(`Server is Running Now ${port}`);
});