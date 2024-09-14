import express from 'express'
import { createApplication, deleteApplication, getEmployerApplication, getRecuiterApplication, updateApplication } from '../controller/application.controller.js'
import { isAuthenticated, isAuthorized } from '../middleware/auth.middleware.js'

const router = express.Router()

router.route('/applications/employerAll').get(isAuthenticated,getEmployerApplication)
router.route('/applications/recuiterAll').get(isAuthenticated,getRecuiterApplication)
router.route('/application/create').post(isAuthenticated,isAuthorized("user"),createApplication)
router.route('/application/update').put(isAuthenticated,isAuthorized("user"),updateApplication)
router.route('/application/delete').delete(isAuthenticated,isAuthorized("user",'admin'),deleteApplication)

export default router