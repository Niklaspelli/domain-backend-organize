const pool = require("../utils/connectDB.js");

const createTask = async (req, res) => {
const boardId = req.params.boardId;
	const { title, description, assignedTo } req.body;
	const createdBy = req.user.userId;
	const status = "undone";

	try {
const [result] = await pool.query(
"INSERT INTO tasks (board_id, title, description, assigned_to, created_by, status) VALUES (?, ?, ?, ?, ?, ?)",);
		res.status(201).json({ message: "Task created", taskId: result.insertId });
	} catch (error) {
res.status(500).json({ error: "Failed to create new task"});
	}
};
