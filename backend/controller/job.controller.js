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
        const {id} = req.params
        const job = await jobModel.findById(id)

        if(!job){
            res.json({
                success:false,
                message:"Job not found"
            })
        }else{
            res.json({
                job,
                success:true,
                message:"job found"
            })
        }
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

        const job = await jobModel.create({...req.body,postedBy:req.user.id})
        res.json({
            message:"Job created successfully",
          success:true,
            job
        })  
    } catch (error) {
        next(error)
    }
}
export const getMyJobs = async (req,res,next) => {    
    try {
        
        const myjobs = await jobModel.find({postedBy:req.user.id})
        console.log("My jobs id..........",req.user.id);
        console.log("My jobs..........",myjobs);
        
        res.json({
            success:true,
            myjobs
        })
    } catch (error) {
        next(new Error(error))
    }
}

export const updateJob = async (req,res,next)=>{
    
    try {
        const user = req.user.id
        const {id} = req.params  
        
        console.log(id);
        
        
        console.log("OLD Data....",req.body);
        
       
        const job = await jobModel.findById(id)

        if(!job){
            return next(new Error("Job not Found"))
        }


        if(job.postedBy.toString() !==  user){
            return next(new Error("YOur are not allowed to update this job"))
        }

        let updateoldJob = await jobModel.findByIdAndUpdate({_id:id},req.body,{new:true}) 
        
        console.log("NEW Data....",updateoldJob);
        
               
            res.json({
                success:true,
                updateoldJob,
                message:"Job Updated Successfully",
            })
        
    } catch (error) {
        next(error)
    }
}
export const deleteJob = async (req,res,next)=>{
    let deleteJob
    try {
        const user = req.user.id
        const {id} = req.params

        const job = await jobModel.findById(id)

        if(!job){
            return next(new Error("Job not Found"))
        }

        if(job.postedBy.toString() !== user){
            return next(new Error("You'r not allowed to delete this job"))
        }
        deleteJob = await jobModel.findByIdAndDelete(id)
        console.log("job deleted successfully");
    } catch (error) {
        next(error)
    }
    res.json({
        message:"Deleted successfully",
        success:true
    })
}