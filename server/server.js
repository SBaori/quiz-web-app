const e = require("express");
const bp = require("body-parser");
const qzusr = require("./database/qz_usr");
const { connect } = require("./database/qz_conn");
const cors = require("cors");
const { auth } = require("./database/qz_auth");

const app = e();

app.use(bp.json());
app.use(cors());

app.post("/signup",async function(req,res){
    // qzusr.addUser(req.body.name,req.body.email,req.body.pwd);
    const docs = await auth(req.body.name,req.body.email,req.body.pwd);
   if(!docs.length)
   {
    console.log("added!");
    qzusr.addUser(req.body.name,req.body.email,req.body.pwd);
    res.sendStatus(200);
   }
   else
   {
    console.log("user present");
    res.sendStatus(403);
   }
    // res.
});

connect().then(() => {
    app.listen(8000,function(){
        console.log("server started!");
    });
}).catch(err => {
    console.log("invalid database connection");
});