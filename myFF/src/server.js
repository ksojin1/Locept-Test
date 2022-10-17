// import  express  from "express";
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
app = express();

const user = [{
    id: "ksj1",
    text: "Hello MYFF",
},{
    id: "ksj2",
    text: "Hello MYFF",
},{
    id: "ksj3",
    text: "Hello MYFF",
},{
    id: "ksj4",
    text: "Hello MYFF",
},{
    id: "ksj5",
    text: "Hello MYFF",
}]

app.use(cors());
app.use(bodyParser.json());   // json 등록
app.use(bodyParser.urlencoded({ extended : false })); // URL-encoded 등록

//url
app.get("/test",(req, res) => {
    res.json(user);
});

app.listen(4000, () => console.log("server open"));