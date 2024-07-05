import mongoose from "mongoose";

//  setting data type
const mentorSchema = mongoose.Schema({
    name: String,
    email: String,
    batch: String
})

const Mentor = mongoose.model("Mentor",mentorSchema);
export default Mentor