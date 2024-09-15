import mongoose, { Schema } from "mongoose";

const applicationSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: String,
    },
    coverLetter: {
        type: String,
    },
    resume: {
        public_id: {
            type:String,
            // required: true
        },
        url: {
            type: String,
            // required:true
        }
    },
    applicant_id:{
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
        }
    },
    recuiter_id:{
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true
        }      
    },
    status:{
        type:String,
        default: 'pending',
        enum:["pending","accept","reject"]
    }
})

export default mongoose.model('application',applicationSchema)