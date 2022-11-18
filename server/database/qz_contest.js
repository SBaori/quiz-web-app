const mongoose = require("mongoose");
const { testSchema } = require("../schema/cntstSchema");

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

module.exports = {Cont,addContest};