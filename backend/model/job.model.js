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
  type:String,
  recuiterId : {
    type:mongoose.Schema.Types.ObjectId,
    ref:"user"
  }

});

export default mongoose.model("job", jobSchema);
