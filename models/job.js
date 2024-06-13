const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
    jobTitle: { type: String, required: true },
    maxApplicants: { type: String, required: true },
    deadline: { type: String, required: true },
    skillsets: { type: String, required: true },
    jobType: { type: String, required: true },
    salary: { type: String, required: true },
    status: { type: String, default: 'open' },
    location: { type: String, },
    img: { type: String,  },
    description: { type: String,  },
    applicants: { type: Array, default: [] },
    selectedApplicants: { type: Array, default: [] },
    rejectedApplicants: { type: Array, default: [] },
    hiredApplicants: { type: Array, default: [] },
}, {timestamps: true});

const JobModel = mongoose.model('job', jobSchema);

module.exports = JobModel;