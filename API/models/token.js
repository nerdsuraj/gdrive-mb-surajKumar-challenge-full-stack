//token models
const mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
    accessToken: String
},
    {
        strict: false,
        versionKey: false
    }
);

const databasetoken = mongoose.model('token', tokenSchema);

module.exports = databasetoken;
