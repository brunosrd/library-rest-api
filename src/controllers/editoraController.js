import { editora } from "../models/Editora.js";

class EditoraController { 

    static async listarEditoras (req, res) {
        try {
            const listarEditoras = await editora.find({}) 
            res.status(200).json(listarEditoras) 
        } catch (erro) {
            res.status(5000).json({ message: `${erro.message} - falha na requisição`})
        }
    }

    
    static async listarEditoraPorId (req, res) {
        try {
            const id = req.params.id 
            const editoraEncontrado = await editora.findById(id) 
            res.status(200).json(editoraEncontrado)
        } catch (erro) {
            res.status(5000).json({ message: `${erro.message} - Falha na requisição da editora`})
        }
    }

    static async cadastrarEditora (req, res) {
        try {
            const novaEditora =await editora.create(req.body) 
            res.status(201).json({ message: "Criado editora com sucesso", editora: novaEditora})
        } catch (erro) {
            res.status(5000).json({ message: `${erro.message} - falha ao cadastrar editora`})
        }
    }

    static async atualizarEditora (req, res) {
        try {
            const id = req.params.id
            await editora.findByIdAndUpdate(id, req.body) 
            res.status(200).json({ message: "Editora atualizada"})
        } catch (erro) {
            res.status(5000).json({ message: `${erro.message} - Falha na atualização`})
        }
    }

  
    static async deletarEditora (req, res) {
        try {
            const id = req.params.id
            await editora.findByIdAndDelete(id) 
            res.status(200).json({ message: "Editora deletada com sucesso"})
        } catch (erro) {
            res.status(5000).json({ message: `${erro.message} - Falha na exclusão da editora`})
        }
    }


}

export default EditoraController
