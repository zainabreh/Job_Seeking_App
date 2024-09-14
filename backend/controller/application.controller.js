import applicationModel from '../model/application.model.js'

export const getRecuiterApplication = async (req,res,next) => {
    try {
        const {id} = req.user        

        const applications = await applicationModel.find({'recuiter_id':id})

        res.json({
            success: true,
            applications
        })


    } catch (error) {
        next()
    }
}
export const getEmployerApplication = async (req,res,next) => {
    try {
        const {id} = req.user        

        const applications = await applicationModel.find({'applicant_id':id})

        res.json({
            success: true,
            applications
        })


    } catch (error) {
        next()
    }
}

export const createApplication = async (req,res,next) => {
    try {
        const {id} = req.user
        const appBody = req.body

        const application = await applicationModel.create({...appBody,applicant_id:id})
        
        res.json({
            success:true,
            message:"Application created successfully",
            application
        })

    } catch (error) {
        next()
    }
}

export const deleteApplication = async (req,res,next) => {
    try {
        const {id} = req.params
    } catch (error) {
        
    }
}
export const updateApplication = async (req,res,next) => {
    try {
        
    } catch (error) {
        
    }
}