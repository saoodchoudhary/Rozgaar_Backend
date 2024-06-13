const JobModel = require("../models/job");


const handleCreateJob = async (req, res) => {
    console.log(req.body)
  try {
    // const { title, description, location, salary, company, jobType } = req.body;
    const newJob = new JobModel(req.body);
    await newJob.save();
    res.status(201).json({ message: 'Job created successfully' });
  } catch (error) {
    console.error('Job creation failed:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const handleGetOpenJob = async (req, res) => {
    try {
        const jobs = await JobModel.find({status: 'open'});
        res.status(200).json(jobs);
    } catch (error) {
        console.error('Job fetch failed:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const handleGetJobById = async (req, res) => {
    try {
        const job = await JobModel.findById(req.params.id);
        res.status(200).json(job);
    } catch (error) {
        console.error('Job fetch failed:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

const handleApplyJob = async (req, res) => {
    try {
        const job = await JobModel.findById(req.params.id);
        job.applicants.push(req.body);
        await job.save();
        res.status(200).json({ message: 'Applied successfully' });
    } catch (error) {
        console.error('Failed to apply job:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
}

module.exports = {handleCreateJob, handleGetOpenJob, handleGetJobById, handleApplyJob};