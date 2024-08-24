import mongoose, { Schema } from "mongoose";

const jobSchema = new Schema({
  title: String,
  postedBy: String,
  description: String,
  deadline: Date,
  jobVacancy: Number,
  requirements: [String],
  facilities: [String],
  salary: Number,
  email: String,
});

export default mongoose.model("job", jobSchema);
