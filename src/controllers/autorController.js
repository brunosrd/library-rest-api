import { autor } from "../models/Autor.js";
class AutorController { 

    static async listarAutores (req, res) {
        try {
            const listarAutores = await autor.find({}) 
            res.status(200).json(listarAutores) 
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha na requisição`})
        }
    }

    
    static async listarAutorPorId (req, res) {
        try {
            const id = req.params.id 
            const autorEncontrado = await autor.findById(id) 
            res.status(200).json(autorEncontrado)
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na requisição do autor`})
        }
    }

    static async cadastrarAutor (req, res) {
        try {
            const novoAutor =await autor.create(req.body) 
            res.status(201).json({ message: "Criado autor com sucesso", autor: novoAutor})
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar autor`})
        }
    }

    static async atualizarAutor (req, res) {
        try {
            const id = req.params.id
            await autor.findByIdAndUpdate(id, req.body) 
            res.status(200).json({ message: "Autor atualizado"})
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na atualização`})
        }
    }

  
    static async deletarAutor (req, res) {
        try {
            const id = req.params.id
            await autor.findByIdAndDelete(id) 
            res.status(200).json({ message: "Autor deletado com sucesso"})
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - Falha na exclusão do autor`})
        }
    }

    static listarLivrosPorAutor = async (req, res) => {
        const { params } = req;
        try {
          const resultado = await Autor.pegarPeloId(params.id);
          const listaLivros = await Autor.pegarLivrosPorAutor(params.id);
          return res.status(200).json({ autor: resultado[0], livros: listaLivros });
        } catch (err) {
          return res.status(500).json(err.message);
        }
    };
}

export default AutorController

