import { Router } from 'express';
import {
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
  loginStudent
} from '../controllers/student.controller';

const router = Router();

router.post('/login', loginStudent);
router.get('/', getAllStudents);
router.post('/', createStudent);
router.put('/:id', updateStudent);
router.delete('/:id', deleteStudent);

export default router;
