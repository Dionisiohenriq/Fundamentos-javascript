const express = require("express");
const alunos = require("./aluno");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});

// Create
app.post('/novo', (req, res) => {
    const newItem = req.body;
    const newId = alunos.reduce((max, current) => max.id > current.id ? max.id : current.id) + 1;
    newItem.id = newId;
    alunos.push(newItem);
    res.status(201).json(newItem);
});

// Read
app.get('/alunos', (req, res) =>{
    res.json(alunos);
});

// Read by Id
app.get('/aluno/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = alunos.findIndex((aluno) => aluno.id == id);

    if(index === -1){
        res.status(404).json({error: 'Aluno not found'});
    }else{
        res.json(alunos[index]);
    }
});

// Update
app.put('/aluno/:id', (req, res) => {
    
    const id = parseInt(req.params.id);
    const updateItem = req.body;
    const index = alunos.findIndex((item) => item.id == id);

    console.log(id, updateItem);
''
    if(index === -1){
        res.status(404).json({error: 'Item not found'});
    }else{
        alunos[index] = {...alunos[index], ...updateItem};
        res.json(alunos[index]);
    }
});

// Delete
app.delete('/alunos/:id', (req, res) =>{
    const id = parseInt(req.params.id);
    const index = alunos.findIndex((item) => item.id == id);

    if(index === -1){
        res.status(404).json({error: 'Item not found'});
    }else{
        const deletedItem = alunos.splice(index, 1);
        res.json(deletedItem[0]);
    }
});

