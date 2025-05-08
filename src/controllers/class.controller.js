"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteClassById = exports.getClassById = exports.createClass = exports.getStudentClassesByDate = exports.getStudentClasses = exports.getClassesByDate = exports.getAllClasses = void 0;
const class_model_1 = require("../models/class.model");
const getAllClasses = async (req, res) => {
    const classes = await class_model_1.ClassModel.find();
    res.json(classes);
};
exports.getAllClasses = getAllClasses;
const getClassesByDate = async (req, res) => {
    const { date } = req.params;
    const targetDate = new Date(date).toDateString();
    const classes = await class_model_1.ClassModel.find();
    const filtered = classes.filter((c) => new Date(c.date).toDateString() === targetDate);
    res.json(filtered);
};
exports.getClassesByDate = getClassesByDate;
const getStudentClasses = async (req, res) => {
    const { studentId } = req.params;
    const classes = await class_model_1.ClassModel.find({ studentIds: studentId });
    res.json(classes);
};
exports.getStudentClasses = getStudentClasses;
const getStudentClassesByDate = async (req, res) => {
    const { studentId, date } = req.params;
    const targetDate = new Date(date).toDateString();
    const classes = await class_model_1.ClassModel.find({ studentIds: studentId });
    const filtered = classes.filter((c) => new Date(c.date).toDateString() === targetDate);
    res.json(filtered);
};
exports.getStudentClassesByDate = getStudentClassesByDate;
const createClass = async (req, res) => {
    const newClass = await class_model_1.ClassModel.create(req.body);
    res.status(201).json(newClass);
};
exports.createClass = createClass;
const getClassById = async (req, res) => {
    const foundClass = await class_model_1.ClassModel.findById(req.params.classId);
    res.json(foundClass);
};
exports.getClassById = getClassById;
const deleteClassById = async (req, res) => {
    await class_model_1.ClassModel.findByIdAndDelete(req.params.classId);
    res.status(204).send();
};
exports.deleteClassById = deleteClassById;
