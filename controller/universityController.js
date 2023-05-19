const university = require('../model/University');

const getAll = async (req, res) => {
	try {
		const universities = await university.getAll();
		res.status(200).json({ universities });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

const getUniversityById = async (req, res) => {
	try {
		const { id } = req.params();
		const uni = await university.getUniversityById(id);
		res.status(200).json({ uni });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};
const createUniversity = async (req, res) => {
	try {
		const uni = await university.createUni(req.body);
		res.status(200).json({ uni });
	} catch (err) {
		res.status(500).json({ error: err.message });
	}
};
const updateUniversity = async (req, res) => {
	try {
		const { id } = req.params();
		const uni = await university.updateUni(id, req.body);
		res.status(200).json({ uni });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};
const deleteUniversity = async (req, res) => {
	try {
		const { id } = req.params();
		const deletedUniversity = await university.deleteUniversity(id);
		res.status(200).json({ deletedUniversity });
	} catch (err) {
		res.status(400).json({ error: err.message });
	}
};

module.exports = {
	getAll,
	getUniversityById,
	createUniversity,
	updateUniversity,
	deleteUniversity,
};
