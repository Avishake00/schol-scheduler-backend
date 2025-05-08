import mongoose from 'mongoose';

const classSchema = new mongoose.Schema({
  subject: String,
  date: {
    type: Date,
    required: true,
  },
  time: String,
  duration: Number,
  teacherId: String,
  studentIds: [String],
  room: String,
  description: String,
  materials: [String],
  category: String,
});

export const ClassModel = mongoose.model('Class', classSchema);
