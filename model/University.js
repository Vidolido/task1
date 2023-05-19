const mongoose = require('mongoose');

const facultySchema = mongoose.Schema({
	name: String,
	adress: String,
	universities: [
		{
			type: mongoose.Schema.Types.ObjectId,
			ref: 'University',
		},
	],
});

const University = mongoose.model('University', facultySchema);

const getFaxById = async (id) => {
	return await University.findOne({ _id: id });
};

const getAll = async () => {
	return await University.find({});
};

const create = async (university) => {
	const fax = new University(university);
	return await uni.save();
};

const updateOne = async (id, university) => {
	return await University.updateOne();
};

const deleteOne = async (id) => {
	return await University.deleteOne({ _id: id });
};
