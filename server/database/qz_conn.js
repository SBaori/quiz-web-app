const mongoose = require('mongoose');

function connect()
{
    mongoose.connect("mongodb+srv://quiz:quiz123@iwp.j2frzf2.mongodb.net/qz_contest");
}

module.exports = {connect};