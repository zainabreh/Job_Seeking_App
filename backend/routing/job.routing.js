import express from 'express'
import { createJob, deleteJob, getAlljobs, getjobByid, updateJob } from '../controller/job.controller.js'

const router = express.Router()

router.route("/job/all").get(getAlljobs)
router.route("/job/singleJob").get(getjobByid)
router.route("/job/newJob").post(createJob)
router.route("/job/updateJob").put(updateJob)
router.route("/job/deleteJob").delete(deleteJob)

export default router