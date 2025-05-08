"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClassModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const classSchema = new mongoose_1.default.Schema({
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
exports.ClassModel = mongoose_1.default.model('Class', classSchema);
