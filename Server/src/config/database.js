import mongoose from "mongoose";

mongoose.connect("mondodb://localhost/local", ()=>{
    console.log(" Database Connected!")
}, e => console.log(e))