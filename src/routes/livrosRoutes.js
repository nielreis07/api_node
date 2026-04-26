import express from "express";
import livroController from "../controller/livroController.js";

const livrosRoutes = express.Router();

livrosRoutes.get("/livros", (req, res) => livroController.listaLivros(req, res))
livrosRoutes.get("/livros/:id", (req, res) => livroController.obterLivro(req, res))
livrosRoutes.post("/livros", (req, res) => livroController.cadastrarLivro(req, res))
livrosRoutes.put("/livros/:id", (req, res) => livroController.atualizarLivro(req, res))
livrosRoutes.delete("/livros/:id", (req, res) => livroController.deletarLivro(req, res))

export default livrosRoutes;