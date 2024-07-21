const Aluno = require("../models/alunoModel");
const mongoose = require("mongoose");

class alunoService {
	async createAluno(data) {
		console.log(data);
		const aluno = new Aluno(data);
		console.log(aluno + "aluno");
		return await aluno.save();
	}

	async getAlunos() {
		return await Aluno.find();
	}

	async getAlunoById(id) {
		return await Aluno.find({ id: id });
	}

	async getAlunoByMongoId(id) {
		return await Aluno.findById(id);
	}

	async updateAluno(id, data) {
		return await Aluno.findByIdAndUpdate(id, data, { new: true });
	}

	async deleteAluno(id) {
		return await Aluno.findByIdAndDelete(id);
	}

	async getNextId() {
		return await Aluno.find();
	}
}

module.exports = new alunoService();
