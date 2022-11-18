const mongoose = require("mongoose");

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

module.exports = {userSchema};