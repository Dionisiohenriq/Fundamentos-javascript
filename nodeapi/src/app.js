const express = require("express");
const connectDB = require("./config/database");
const alunosRoutes = require("./routes/alunoRoutes");
const dotenv = require("dotenv");

dotenv.config();

const app = express();
app.use(express.json());

connectDB();

app.use("/api/alunos", alunosRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`);
});
