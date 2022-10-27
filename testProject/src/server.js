// import  express  from "express";
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
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
},{
    id: "ksj6",
    text: "Hello MYFF",
},{
    id: "ksj7",
    text: "Hello MYFF",
},{
    id: "ksj8",
    text: "Hello MYFF",
},{
    id: "ksj9",
    text: "Hello MYFF",
},{
    id: "ksj10",
    text: "Hello MYFF",
},{
    id: "ksj11",
    text: "Hello MYFF",
},{
    id: "ksj12",
    text: "Hello MYFF",
},{
    id: "ksj13",
    text: "Hello MYFF",
},{
    id: "ksj14",
    text: "Hello MYFF",
},{
    id: "ksj15",
    text: "Hello MYFF",
},{
    id: "ksj16",
    text: "Hello MYFF",
},{
    id: "ksj17",
    text: "Hello MYFF",
},{
    id: "ksj18",
    text: "Hello MYFF",
}]

app.use(cors());
app.use(bodyParser.json());   // json 등록
app.use(bodyParser.urlencoded({ extended : false })); // URL-encoded 등록
app.use(fileUpload());
//url
app.get("/test",(req, res) => {
    const pageNum = parseInt(req.param('page'));
    const showPage = 4;
    let boards = [];

    const start = pageNum*showPage;
    const end = showPage*(pageNum+1);

    for(let i=start; i<end; i++){
        if(user.length > i){
            boards.push(user[i]);
        }
    }

    console.log('pageNum : '+ pageNum);
    console.log('showPage : '+ showPage);
    console.log('boards : '+ boards.length);

    res.json(boards);
});

app.post("/test",(req, res) => {
    //const {imgFile} = req.body;
    console.log(req.files);
});

app.listen(4000, () => console.log("server open"));