import express from  "express";
import LivroController from "../controllers/livroController.js";

const routes = express.Router(); //objeto que ira armazenar as rotas relacionadas aos livros

routes.get("/livros", LivroController.listrarLivros)
routes.get("/livros/:id", LivroController.listrarLivroPorId)
routes.post("/livros", LivroController.cadastrarLivros)
routes.put("/livros/:id", LivroController.atualizarLivro)
routes.delete("/livros/:id", LivroController.deletarLivro)


export default routes