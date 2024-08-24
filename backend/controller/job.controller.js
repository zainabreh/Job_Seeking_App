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
export const createJob = (req,res,next)=>{
    let data = req.body
    try {
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