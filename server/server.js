const e = require("express");
const bp = require("body-parser");
const qzusr = require("./database/qz_usr");

const app = e();

app.use(bp.urlencoded({extended: true}));

// app.get("/",function(req,res){
//     res.sendFile(__dirname + "/index.html");
// });

app.post("/signin",function(req,res){
    qzusr.addUser(req.body.name,req.body.email,req.body.pwd);
    res.json("User added!");
});

app.listen(8000,function(){
    console.log("server started!");
});