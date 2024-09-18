import express from  "express";
import AutorController from "../controllers/autorController.js";

const routes = express.Router(); //Cria um objeto Router do Express para armazenar as rotas relacionadas aos autores

routes.get("/autor", AutorController.listarAutores)
routes.get("/autor/:id", AutorController.listarAutorPorId)
routes.post("/autor", AutorController.cadastrarAutor)
routes.put("/autor/:id", AutorController.atualizarAutor)
routes.delete("/autor/:id", AutorController.deletarAutor)


export default routes