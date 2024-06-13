const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true , unique: true},
    password: { type: String, required: true },
    selectedType: { type: String, required: true },
    skill: { type: String},
    language : { type: String},
    rating: { type: String , default: '0'},
    experience: { type: String , default: '0'},
    totalJobs: { type: String , default: '0'}, 
    totalEarnings: { type: String , default: '0'},
    budget: { type: String , default: '0'},
    jobs : {type: Array , default: []},
    progressJobs : {type: Array , default: []},
    verified: { type: String , default: 'no'},


}, {timestamps: true});

const RegisterModel = mongoose.model('register', registerSchema);

module.exports = RegisterModel;