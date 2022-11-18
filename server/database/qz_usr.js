const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
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
);

const User = mongoose.models.user || mongoose.model("users",userSchema);

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