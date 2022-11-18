const mongoose = require("mongoose");
const { userSchema } = require("../schema/usrSchema");

const User = mongoose.models.user || mongoose.model("users",userSchema);

async function signup(email)
{
    const rec = await User.findOne({email: email});
    if(!rec)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

async function signin(email,pwd)
{
    const rec = await User.findOne({email: email});
    if(!rec)
    {
        return 0;
    }
    else
    {
        if(pwd === rec.pwd)
        {
            return 1;
        }
        else
        {
            return 0;
        }
    }
}
module.exports = { signup,signin };

