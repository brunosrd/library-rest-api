import express from "express" // Importa a biblioteca Express, que é usada para criar o servidor e gerenciar rotas
import livros from "./livrosRoutes.js" // Importa as rotas relacionadas aos livros. livrosRoutes: Arquivo que contém as rotas específicas para a manipulação de livros.
import autores from "./autoresRoutes.js"


const routes = (app) => {
app.route("/").get((req, res) => res.status(200).send("Curso de Node.js")) // Define uma rota para a raiz ("/") que responde com uma mensagem

    // Configura o middleware para parsear JSON e adiciona as rotas de livros à aplicação
    app.use(express.json(), livros, autores)
}

export default routes