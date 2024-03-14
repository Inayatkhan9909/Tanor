
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser")
const cors = require("cors");
require('dotenv').config();

const multerMid = require("./Middlewares/Multer")



const {RegisterHandle,LoginHandle} = require("./Controllers/UserController");
const {createItem,getItems} = require("./Controllers/ItemsController")

const url= process.env.url;

if(mongoose.connect(url))
{
    console.log("Data base connected");
}
else
{
    console.log("Data base not connected");
}



const app = express();
app.use(bodyparser.json());
app.use(cors());
const port = 2000;

app.post("/user/register",RegisterHandle);
app.post("/user/login",LoginHandle);

app.post("/item/create",multerMid,createItem);
app.get("/item/getItems",getItems);



app.listen(port,console.log(`port started on :${port}`));



