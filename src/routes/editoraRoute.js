import express from "express";
import editoraController from "../controller/editoraController.js";

const router = express.Router();

router.get("/editoras", editoraController.listarEditoras);
router.get("/editoras/:id", editoraController.listarEditoraPorId);
router.post("/editoras", editoraController.cadastrarEditora);
router.put("/editoras/:id", editoraController.atualizarEditora);
router.delete("/editoras/:id", editoraController.deletarEditora);

export default router;