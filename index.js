require('dotenv').config();
const express = require("express");
//import  express  from 'express'
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("thakur_prabalsingh");
});

app.get("/login", (req, res) => {
  res.send("<h1>Please login</h1>");
});

app.get('/youtube',(req,res)=>{
    res.send('<h2>chai aur code')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
