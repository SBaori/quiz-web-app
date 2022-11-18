const mongoose = require("mongoose");

const usrSchema = new mongoose.Schema(
    {
        name: String,
        email: String,
        pwd: String,
        contests:
        [
            {
                name: String,
                score: Number
            }
        ]
    }
)
const User = mongoose.models.user || mongoose.model("users",userSchema);

export async function auth(name,email,pwd)
{
    await User.find({email: email},function(err,doc){
        if(err)
        {
            console.log(err);
        }
        else
        {
            console.log(doc);
        }
    });
}

module.exports = auth;

