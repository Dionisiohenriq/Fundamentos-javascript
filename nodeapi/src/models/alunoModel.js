const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Aluno', alunoSchema);