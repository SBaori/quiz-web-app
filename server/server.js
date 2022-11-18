const e = require("express");
const bp = require("body-parser");
// const qzusr = require("./database/qz_usr");
const contest = require("./database/qz_contest");
const cors = require("cors");
const {connect} = require("./database/qz_conn");
const app = e();

app.use(bp.json());
app.use(cors());

// app.post("/signup",async function(req,res){
//     // qzusr.addUser(req.body.name,req.body.email,req.body.pwd);
//     const b = await auth.signup(req.body.email);
//    if(b)
//    {
//        qzusr.addUser(req.body.name,req.body.email,req.body.pwd);
//        console.log("added!");
//     res.sendStatus(200);
//    }
//    else
//    {
//     console.log("user present");
//     res.sendStatus(403);
//    }
//     // res.
// });

// app.post("/signin",async function(req,res){
//     const b = await auth.signin(req.body.email,req.body.pwd)
//     if(b)
//     {
//         res.sendStatus(200);
//     }
//     else
//     {
//         res.sendStatus(400);
//     }
// });

app.get("/questions",async function(req,res){
    const data = await contest.getContest(req.body.name);
    res.send(data);
});

connect().then(() => {
    app.listen(8000,function(){
        console.log("server started!");
    });
}).catch(err => {
    console.log("invalid database connection" + err);
});