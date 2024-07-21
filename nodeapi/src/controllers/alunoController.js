const { isValidObjectId } = require("mongoose");
const alunoService = require("../services/alunoService");

class alunoController {
	async create(req, res) {
		try {
			console.log(req + "controller");
			const aluno = await alunoService.createAluno(req.body);
			res.status(201).json(aluno);
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	}

	async getAll(req, res) {
		try {
			const alunos = await alunoService.getAlunos();
			res.status(200).json(alunos);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}

	async getById(req, res) {
		try {
			console.log(req.params.id + " passou aqui primeiro");
			const id = req.params.id;
			console.log(typeof id);
			console.log(isNaN(id));
			console.log(isValidObjectId(id));

			if (!isValidObjectId(id)) {
				const aluno = await alunoService.getAlunoById(req.params.id);
				if (!aluno)
					return res.status(404).json({ message: "Aluno not found." });
				res.status(200).json(aluno);
			} else {
				const aluno = await alunoService.getAlunoByMongoId(req.params.id);
				if (!aluno)
					return res.status(404).json({ message: "Aluno not found." });
				res.status(200).json(aluno);
			}
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}

	async update(req, res) {
		try {
			const aluno = await alunoService.updateAluno(req.params.id, req.body);
			if (!aluno) return res.status(404).json({ message: "Aluno not found." });
			res.status(200).json(aluno);
		} catch (error) {
			res.status(400).json({ message: error.message });
		}
	}

	async delete(req, res) {
		try {
			const aluno = await alunoService.deleteAluno(req.params.id);
			if (!aluno) return res.status(404).json({ message: "Aluno not found." });
			res.status(204).send();
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}

	async getNextId(req, res) {
		console.log(req);
		try {
			console.log("passou aqui");
			const alunos = await alunoService.getNextId();
			if (!alunos) return res.status(404).json({ message: "Aluno not found." });
			res.status(200).json(alunos);
		} catch (error) {
			res.status(500).json({ message: error.message });
		}
	}
}

module.exports = new alunoController();
