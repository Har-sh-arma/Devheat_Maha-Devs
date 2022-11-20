const express = require("express");
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const cors=require("cors");
const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
const DBURI = process.env.DBURI;
// const ServerTesting = require('./middleware/serverUser');

//ROUTES IMPORTING
const router = require('./routes/router.js');
// const serverIsRunning = require("./middleware/serverUser");

//allowing cross origin requests
app.use(cors(corsOptions))

//USING MIDDLEWARES
app.use(express.json());
// app.use(serverIsRunning);

//USING ROUTES
app.use('/',router);

mongoose.connect(DBURI,()=>{
    console.log('Connected to DB');
})

app.listen(PORT,()=>{
    console.log(
        `The Server is active at ${PORT}`
    );
})
