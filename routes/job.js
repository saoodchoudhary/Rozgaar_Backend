
const express = require('express');
const { handleCreateJob, handleGetOpenJob, handleGetJobById, handleApplyJob } = require('../controllers/job');
const router = express.Router();

router.post("/createjob", handleCreateJob);
router.get("/getOpenJob", handleGetOpenJob);
router.get("/getjob/:id", handleGetJobById);
router.post("/applyjob/:id",  handleApplyJob);




module.exports = router;