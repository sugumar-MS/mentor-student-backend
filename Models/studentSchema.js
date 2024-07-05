import mongoose from "mongoose";

// setting data type
const studentSchema = mongoose.Schema({
    name: String,
    email: String,
    batch: String,
    mentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Mentor' },
    previousMentors: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Mentor' }]
});

const Student = mongoose.model("Student", studentSchema);
export default Student;