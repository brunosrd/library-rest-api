import livro from "../models/Livro.js";
import { autor } from "../models/Autor.js"

class LivroController { // Define a classe LivroController que contém métodos estáticos para realizar operações CRUD
    // Método para listar todos os livros
    static async listrarLivros (req, res) {
        try {
            const listaLivros = await livro.find({}) //Utiliza método find do Mongoose para buscar todos os documentos na coleção de livros
            res.status(200).json(listaLivros) // Retorna a lista de livros com status 200 (OK)
        } catch (erro) {
            res.status(5000).json({ message: `${erro.message} - falha na requisição`})
        }
    }

    // Método para listar um livro por ID
    static async listarLivroPorId (req, res) {
        try {
            const id = req.params.id // Obtém o ID do livro a partir dos parâmetros da requisição
            const livroEncontrado = await livro.findById(id) //Utiliza método findById do Mongoose para buscar o livro pelo ID
            res.status(200).json(livroEncontrado)
        } catch (erro) {
            res.status(5000).json({ message: `${erro.message} - Falha na requisição do livro`})
        }
    }

    // Método para cadastrar um novo livro
    static async cadastrarLivros (req, res) {
        const novoLivro = req.body
        const novaEditora = req.boy
        try {
            const editoraEncontrada = await editora.findById(novaEditora.editora)
            const autorEncontrado = await autor.findById(novoLivro.autor)
            const livroCompleto  = {  ...novoLivro, autor: { ...autorEncontrado._doc }}
            const livroCriado = await livro.create()
            res.status(201).json({ message: "Criado livro com sucesso", livro: novoLivro})
        } catch (erro) {
            res.status(5000).json({ message: `${erro.message} - falha ao cadastrar livro`})
        }
    }

    // Método para atualizar um livro existente
    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body) //Utiliza método findByIdAndUpdate do Mongoose para atualizar o livro pelo ID
            res.status(200).json({ message: "Livro atualizado"})
        } catch (erro) {
            res.status(5000).json({ message: `${erro.message} - Falha na atualização`})
        }
    }

    // Método para deletar um livro existente
    static async deletarLivro (req, res) {
        try {
            const id = req.params.id
            await livro.findByIdAndDelete(id) // Utiliza o método findByIdAndDelete do Mongoose para deletar o livro pelo ID
            res.status(200).json({ message: "Livro deletado com sucesso"})
        } catch (erro) {
            res.status(5000).json({ message: `${erro.message} - Falha na exclusão do livro`})
        }
    }


}

export default LivroController

