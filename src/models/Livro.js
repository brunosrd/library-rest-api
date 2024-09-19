import mongoose from "mongoose"
import { autorSchema } from "./Autor.js"
import { editoraSchema } from "./Editora.js";

// Define o esquema (schema) para o modelo de Livro
const livroSchema = new mongoose.Schema ({
    id: { type: mongoose.Schema.Types.ObjectId }, // Campo 'id' do tipo ObjectId do Mongoose
    titulo: { type: String, required: true }, // Campo 'titulo' do tipo String, obrigatório
    editora: editoraSchema, 
    preco: { type: Number }, 
    paginas: { type: Number },
    autor: autorSchema 
}, { versionKey: false });// Desativa a versão do documento (__v) adicionada pelo Mongoose

// Cria o modelo 'livro' baseado no esquema 'livroSchema'
// O modelo representa a coleção 'livros' no MongoDB
const livro = mongoose.model("livros", livroSchema)

export default livro;