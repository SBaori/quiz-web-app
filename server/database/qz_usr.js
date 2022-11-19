const mongoose = require('mongoose');
const { userSchema } = require("../schema/usrSchema");
const conn = require("./qz_conn");

const User = conn.usr.models.user || conn.usr.model("users",userSchema);

async function addUser(name,email,pwd)
{
    const user = new User(
        {
            name: name,
            email: email,
            pwd: pwd,
            constests: []
        }
    );

    await user.save();
}
module.exports = {User,addUser};