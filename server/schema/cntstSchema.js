const mongoose = require("mongoose");

const testSchema = new mongoose.Schema(
    {
        name: String,
        questions:
        [
            {
                title: String,
                ans: String,
                opts:
                [
                    {
                        opt: String
                    }
                ]
            }
        ]
    }
);

module.exports = {testSchema};