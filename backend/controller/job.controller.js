import jobModel from "../model/job.model.js"

export const getAlljobs = (req,res,next)=>{
    try {
        
    } catch (error) {
        next(error)
    }
}
export const getjobByid = (req,res,next)=>{
    try {
        
    } catch (error) {
        next(error)
    }
}
export const createJob = async (req,res,next)=>{
    let data = req.body
    
    try {
        await jobModel.create(data)
        res.json({
            message:"job posted successfully",
            data
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