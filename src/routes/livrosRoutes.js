import express from "express";
import livroController from "../controller/livroController";

const routes = express.Router();

routes.get("/livros", livroController.listaLivros)
routes.get("/livros/:id", livroController.obterLivro)
routes.post("/livros", livroController.cadastrarLivro)
routes.put("/livros/:id", livroController.atualizarLivro)
routes.delete("/livros/:id", livroController.deletarLivro)