const faculty = require('../model/Faculty');

const getAll = async (req, res) => {
	try {
		const faculties = await faculty.getAll();
		res.status(200).json({ faculties });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

const getFaxById = async (req, res) => {
	try {
		const { id } = req.params();
		const fax = await faculty.getFaxById(id);
		res.status(200).json({ fax });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};
const createFax = async (req, res) => {
	try {
		const fax = await faculty.createFax(req.body);
		res.status(200).json({ fax });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
const updateFax = async (req, res) => {
	try {
		const { id } = req.params();
		const fax = await faculty.updateFax(id, req.body);
		res.status(200).json({ fax });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};
const deleteFax = async (req, res) => {
	try {
		const { id } = req.params();
		const deletedFax = await faculty.deleteFax(id);
		res.status(200).json({ deletedFax });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

module.exports = {
	getAll,
	getFaxById,
	createFax,
	updateFax,
	deleteFax,
};
