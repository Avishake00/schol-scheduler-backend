import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  major: String,
  year: Number,
  studentId: String,
});

export const StudentModel = mongoose.model('Student', studentSchema);
