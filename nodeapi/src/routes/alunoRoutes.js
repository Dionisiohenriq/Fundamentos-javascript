const express = require("express");
const router = express.Router();
const alunoController = require("../controllers/alunoController");

router.post("/", alunoController.create);
router.get("/", alunoController.getAll);
router.get("/:id", alunoController.getById);
router.put("/:id", alunoController.update);
router.delete("/:id", alunoController.delete);
router.get("/next", alunoController.getNextId);

module.exports = router;
