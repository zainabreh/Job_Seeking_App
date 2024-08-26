import express from "express"
import { createNewUser, deleteUser, getAllUsers, getProfile, getSingleUser, updateUser } from "../controller/user.controller.js"
import { isAuthenticated } from "../middleware/auth.middleware.js"

const router = express.Router()

// router.route("/user/all").get(isAuthenticated,isAuthorized('admin','user'),getAllUsers)
router.route("/user/all").get(getAllUsers)
router.route("/user/singleuser").get(getSingleUser)
router.route("/getUserProfile").get(isAuthenticated,getProfile)
router.route("/user/createuser").post(createNewUser)
router.route("/user/updateuser").put(updateUser)
router.route("/user/deleteUser").delete(deleteUser)

export default router