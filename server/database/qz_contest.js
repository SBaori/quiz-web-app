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

const Cont = mongoose.models.cont || mongoose.model("contests",testSchema);

async function addContest(name,questions)
{
    const cont = new Cont(
        {
            name: name,
            questions: questions
        }
    );

    await cont.save();
}

module.exports = {cont,addContest};