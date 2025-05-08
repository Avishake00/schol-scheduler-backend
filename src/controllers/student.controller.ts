import { Request, Response } from 'express';
import { StudentModel } from '../models/student.model';


export const loginStudent = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  console.log("email",email,password);
  

  try {
    const student = await StudentModel.findOne({ email });
    console.log(student);
    

    if (!student) {
       res.status(404).json({ message: "Student not found" });
    }

    if (student?.studentId !== password) {
       res.status(401).json({ message: "Invalid password" });
    }

     res.status(200).json({ message: "Login successful", student });
  } catch (err) {
     res.status(500).json({ message: "Error during login", error: err });
  }
};

export const getAllStudents = async (_: Request, res: Response) => {
  const students = await StudentModel.find();
  res.json(students);
};

export const createStudent = async (req: Request, res: Response) => {
  const newStudent = await StudentModel.create(req.body);
  res.status(201).json(newStudent);
};

export const updateStudent = async (req: Request, res: Response) => {
  const updated = await StudentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

export const deleteStudent = async (req: Request, res: Response) => {
  await StudentModel.findByIdAndDelete(req.params.id);
  res.status(204).send();
};

