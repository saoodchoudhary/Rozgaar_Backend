const mongoose = require('mongoose');

const companyRegisterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true , unique: true},
    password: { type: String, required: true },
    selectedType: { type: String, required: true },
    rating: { type: String , default: '0'},
    totalJobs: { type: String , default: '0'}, 
    HiredJobs: { type: String , default: '0'},
    totalEarnings: { type: String , default: '0'},
}, {timestamps: true});

const CompanyRegisterModel = mongoose.model('company', companyRegisterSchema);

module.exports = CompanyRegisterModel;