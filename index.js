const express=require('express')
const app=express();

const dns = require('dns'); 



app.listen(7000, () => {
    console.log("Server started at http://localhost:7000");
})