import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from './utils/db';
import classRoutes from './routes/class.routes';
import studentRoutes from './routes/student.routes';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/classes', classRoutes);
app.use('/api/students', studentRoutes);

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});
