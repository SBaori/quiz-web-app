const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://quiz:<password>@iwp.j2frzf2.mongodb.net/qz_contest", { useNewUrlParser: true });

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