const mongoose = require('mongoose');

async function connect()
{
    await mongoose.connect("mongodb+srv://quiz:quiz123@iwp.j2frzf2.mongodb.net/qz_usr", { useNewUrlParser: true });
}

module.exports = {connect};