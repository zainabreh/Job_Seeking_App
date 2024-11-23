import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema({
  position: String,
  company: String,
  description: String,
  deadline: Date,
  vacancy: Number,
  requiredSkill: [{type:String}],
  facilities: [{type:String}],
  salary: Number,
  email: String,
  location: String,
  status:String,
  postedBy : {
    type:mongoose.Schema.ObjectId,
    ref:"user",
    required:true
  },
  category: {
    type:mongoose.Schema.Types.ObjectId,
    ref:'category',
    required:true
  }
},
{timestamps:true});

export default mongoose.model("job", jobSchema);
