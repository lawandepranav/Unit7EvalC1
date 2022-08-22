const express=require('express')

const app=express();

const dns = require('dns'); 
dns.lookup('google.com', (err, value) => { 
    if(err) { 
        console.log(err); 
        return; 
    } 
    console.log(value); 
}) 


app.listen(7000, () => {
    console.log("Server started at http://localhost:7000");
})