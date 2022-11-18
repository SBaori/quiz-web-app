const mongoose = require("mongoose");
const { userSchema } = require("../schema/usrSchema");

const User = mongoose.models.user || mongoose.model("users",userSchema);

async function auth(name,email,pwd)
{
    return await User.find({email: email});
}

module.exports = { auth };

