import { Router } from "express";
import {
	createClass,
	deleteClassById,
	getAllClasses,
	getClassById,
	getClassesByDate,
	getStudentClasses,
	getStudentClassesByDate,
} from "../controllers/class.controller";

const router = Router();

router.get("/", getAllClasses);
router.get("/date/:date", getClassesByDate);
router.get("/student/:studentId", getStudentClasses);
router.get("/student/:studentId/date/:date", getStudentClassesByDate);
router.post("/", createClass);
router.get("/:classId", getClassById);
router.delete("/:classId", deleteClassById);

export default router;
