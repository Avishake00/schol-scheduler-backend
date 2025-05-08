"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const studentSchema = new mongoose_1.default.Schema({
    name: String,
    email: String,
    major: String,
    year: Number,
    studentId: String,
});
exports.StudentModel = mongoose_1.default.model('Student', studentSchema);
