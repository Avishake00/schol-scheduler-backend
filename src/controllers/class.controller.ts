import { Request, Response } from "express";
import { ClassModel } from "../models/class.model";

export const getAllClasses = async (req: Request, res: Response) => {
	const classes = await ClassModel.find();
	res.json(classes);
};

export const getClassesByDate = async (req: Request, res: Response) => {
	const { date } = req.params;
	const targetDate = new Date(date).toDateString();
	const classes = await ClassModel.find();
	const filtered = classes.filter(
		(c) => new Date(c.date).toDateString() === targetDate
	);
	res.json(filtered);
};

export const getStudentClasses = async (req: Request, res: Response) => {
	const { studentId } = req.params;
	const classes = await ClassModel.find({ studentIds: studentId });
	res.json(classes);
};

export const getStudentClassesByDate = async (req: Request, res: Response) => {
	const { studentId, date } = req.params;
	const targetDate = new Date(date).toDateString();
	const classes = await ClassModel.find({ studentIds: studentId });
	const filtered = classes.filter(
		(c) => new Date(c.date).toDateString() === targetDate
	);
	res.json(filtered);
};

export const createClass = async (req: Request, res: Response) => {
	const newClass = await ClassModel.create(req.body);
	res.status(201).json(newClass);
};
export const getClassById = async (req: Request, res: Response) => {
	const foundClass = await ClassModel.findById(req.params.classId);
	res.json(foundClass);
};

export const deleteClassById = async (req: Request, res: Response) => {
	await ClassModel.findByIdAndDelete(req.params.classId);
	res.status(204).send();
};
