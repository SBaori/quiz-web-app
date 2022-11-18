const mongoose = require("mongoose");
const { testSchema } = require("../schema/cntstSchema");
const Cont = mongoose.model("contests",testSchema);

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

async function getContest(name)
{
    return await Cont.find({name: name});
}

module.exports = {Cont,addContest,getContest};