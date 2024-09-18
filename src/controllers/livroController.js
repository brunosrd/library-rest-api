import livro from "../models/Livro.js";


class LivroController {

    static async listrarLivros (req, res) {
        try {
            const listaLivros = await livro.find({}) //metodo do mongose para encontrar tudo que tem na coleção
            res.status(200).json(listaLivros)
        } catch (erro) {
            res.status(5000).json({ message: `${erro.message} - falaha na requisição`})
        }
    }

    static async listrarLivroPorId (req, res) {
        try {
            const id = req.params.id
            const livroEncontrado = await livro.findById(id) //metodo do mongose para encontrar tudo que tem na coleção
            res.status(200).json(livroEncontrado)
        } catch (erro) {
            res.status(5000).json({ message: `${erro.message} - Falha na requisição do livro`})
        }
    }


    static async cadastrarLivros (req, res) {
        try {
            const novoLivro =await livro.create(req.body)
            res.status(201).json({ message: "Criado livro com sucesso", livro: novoLivro})
        } catch (erro) {
            res.status(5000).json({ message: `${erro.message} - falha ao cadastrar livro`})
        }
    }

    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id
            await livro.findByIdAndUpdate(id, req.body) //metodo do mongose para encontrar tudo que tem na coleção
            res.status(200).json({ message: "Livro atualizado"})
        } catch (erro) {
            res.status(5000).json({ message: `${erro.message} - Falha na atualização`})
        }
    }

    static async deletarLivro (req, res) {
        try {
            const id = req.params.id
            await livro.findByIdAndDelete(id) //metodo do mongose para encontrar tudo que tem na coleção
            res.status(200).json({ message: "Livro deletado com sucesso"})
        } catch (erro) {
            res.status(5000).json({ message: `${erro.message} - Falha na exclusão do livro`})
        }
    }


}

export default LivroController

