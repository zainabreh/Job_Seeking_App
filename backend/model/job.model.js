import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema({
  position: String,
  company: String,
  description: String,
  deadline: Date,
  vacancy: Number,
  requiredSkill: String,
  facilities: String,
  salary: Number,
  email: String,
  location: String,
  status:String,
  type:String,
  recuiterId : {
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  }

});

export default mongoose.model("job", jobSchema);
