const mongoose = require('mongoose');

const universitySchema = mongoose.Schema({
	name: String,
	adress: String,
	faculty: mongoose.Schema.Types.ObjectId,
});

const Faculty = mongoose.model('University', universitySchema);

const getFaxById = async (id) => {
	return await Faculty.findOne({ _id: id });
};

const getAll = async () => {
	return await Faculty.find({});
};

const create = async (faculty) => {
	const fax = new Faculty(faculty);
	return await fax.save();
};

const updateOne = async (id, faculty) => {
	return await Faculty.updateOne();
};

const deleteOne = async (id) => {
	return await Faculty.deleteOne({ _id: id });
};
