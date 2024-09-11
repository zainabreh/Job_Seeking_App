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
  category:String,
  postedBy : {
    type:mongoose.Schema.ObjectId,
    ref:"user",
    required:true
  },

},
{timestamps:true});

export default mongoose.model("job", jobSchema);
