import express from 'express'
import { createJob, deleteJob, getAlljobs, getjobByid, updateJob } from '../controller/job.controller.js'
import { isAuthenticated, isAuthorized } from '../middleware/auth.middleware.js'

const router = express.Router()

router.route("/job/all").get(getAlljobs)
router.route("/job/singleJob/:id").get(getjobByid)
router.route("/job/newJob").post(isAuthenticated,isAuthorized("admin","recuiter"),createJob)
router.route("/job/updateJob").put(isAuthenticated,isAuthorized("admin","recuiter"),updateJob)
router.route("/job/deleteJob").delete(isAuthenticated,isAuthorized("admin","recuiter"),deleteJob)

export default router