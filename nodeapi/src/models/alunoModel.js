const mongoose = require("mongoose");

const alunoSchema = new mongoose.Schema({
	id: {
		type: Number,
		required: true,
	},
	name: {
		type: String,
		required: true,
	},
	description: {
		type: String,
		required: true,
	},
	_id: {
		type: mongoose.SchemaTypes.ObjectId,
		required: true,
	},
});

module.exports = mongoose.model("Aluno", alunoSchema);
