import {
    pool
} from "../../db.js";

export const newStudent = async (req, res) => {
    try {
        const result = await pool.query(
            "INSERT INTO students (name, generation) VALUES ($1, $2) RETURNING *",
            [req.body.name, req.body.generation]
        );
        res.json({
            student: result.rows[0],
            message: "Mahasiswa berhasil ditambahkan.",
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
};

export const getAllStudents = async (_req, res) => {
    try {
        const result = await pool.query("SELECT * FROM students");
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
};

export const getStudentById = async (req, res) => {
    try {
        const result = await pool.query("SELECT * FROM students WHERE id = $1", [
            req.params.id,
        ]);
        res.json(result.rows[0]);
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
};

export const updateStudent = async (req, res) => {
    try {
        await pool.query(
            "UPDATE students SET name = $1, generation = $2 WHERE id = $3",
            [req.body.name, req.body.generation, req.params.id]
        );
        res.status(200).json({
            message: "Mahasiswa berhasil ditambahkan.",
        });
    } catch (error) {
        res.status(500).json({
            msg: error.message
        });
    }
};