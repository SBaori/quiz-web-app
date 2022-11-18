const e = require("express");
const bp = require("body-parser");
const qzusr = require("./database/qz_usr");
const connect = require("./database/qz_conn");
const cors = require("cors");

const app = e();

app.use(bp.json());
app.use(cors());

app.post("/signup",function(req,res){
    // qzusr.addUser(req.body.name,req.body.email,req.body.pwd);
    // res.
    console.log(req.body.name);
});

connect().then(() => {
    app.listen(8000,function(){
        console.log("server started!");
    });
}).catch(err => {
    console.log("invalid database connection");
});