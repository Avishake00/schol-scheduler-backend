"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.createStudent = exports.getAllStudents = exports.loginStudent = void 0;
const student_model_1 = require("../models/student.model");
const loginStudent = async (req, res) => {
    const { email, password } = req.body;
    console.log("email", email, password);
    try {
        const student = await student_model_1.StudentModel.findOne({ email });
        console.log(student);
        if (!student) {
            res.status(404).json({ message: "Student not found" });
        }
        if (student?.studentId !== password) {
            res.status(401).json({ message: "Invalid password" });
        }
        res.status(200).json({ message: "Login successful", student });
    }
    catch (err) {
        res.status(500).json({ message: "Error during login", error: err });
    }
};
exports.loginStudent = loginStudent;
const getAllStudents = async (_, res) => {
    const students = await student_model_1.StudentModel.find();
    res.json(students);
};
exports.getAllStudents = getAllStudents;
const createStudent = async (req, res) => {
    const newStudent = await student_model_1.StudentModel.create(req.body);
    res.status(201).json(newStudent);
};
exports.createStudent = createStudent;
const updateStudent = async (req, res) => {
    const updated = await student_model_1.StudentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
};
exports.updateStudent = updateStudent;
const deleteStudent = async (req, res) => {
    await student_model_1.StudentModel.findByIdAndDelete(req.params.id);
    res.status(204).send();
};
exports.deleteStudent = deleteStudent;
