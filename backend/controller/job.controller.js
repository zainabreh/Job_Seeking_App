import jobModel from "../model/job.model.js"

export const getAlljobs = async (req,res,next)=>{
    try {
        // const reqId = req.user.id
        const jobs = await jobModel.find()
        res.json({
            jobs
        })
    } catch (error) {
        next(error)
    }
}
export const getjobByid = async (req,res,next)=>{
    try {
        const {id} = req.body
        const job = await jobModel.findOne(id)
        res.json({
            job,
            success:true,
            message:"Single user"
        })
    } catch (error) {
        next(error)
    }
}
export const createJob = async (req,res,next)=>{
    let {position,company,type} = req.body
    
    try {

        const existedjob = await jobModel.findOne({position,company,type})

        if(existedjob){
            return next(new Error("Job already exists"))
        }

        const job = await jobModel.create(req.body)
        res.json({
            message:"Job created successfully",
            success:true,
            job
        })
    } catch (error) {
        next(error)
    }
}
export const updateJob = (req,res,next)=>{
    try {
        
    } catch (error) {
        next(error)
    }
}
export const deleteJob = (req,res,next)=>{
    try {
        
    } catch (error) {
        next(error)
    }
}