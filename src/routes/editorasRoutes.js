import express from  "express";
import EditoraController from "../controllers/editoraController.js";

const routes = express.Router()

routes.get("/editora", EditoraController.listarEditoras)
routes.get("/editora/:id", EditoraController.listarEditoraPorId)
routes.get('/editoras/:id/livros', EditoraController.listarLivrosPorEditora)
routes.post("/editora", EditoraController.cadastrarEditora)
routes.put("/editora/:id", EditoraController.atualizarEditora)
routes.delete("/editora/:id", EditoraController.deletarEditora)


export default routes