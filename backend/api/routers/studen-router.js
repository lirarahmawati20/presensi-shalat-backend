import express from "express";
import {
    newStudent,
    getAllStudents,
    getStudentById,
    updateStudent
} from "../controllers/student.js";
import {
    verifyToken
} from '../middleware/verifyToken.js'; // Menggunakan { } karena bukan default export

const router = express.Router();

router.post("/api/v1/newStudent", verifyToken, newStudent);
router.get("/api/v1/getAllStudents", verifyToken, getAllStudents);
router.get("/api/v1/getStudentById", verifyToken, getStudentById);
router.put("/api/v1/updateStudent", verifyToken, updateStudent);

export default router;