
import mongoose from "mongoose";

const editoraSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  endereco: { type: String },
  telefone: { type: String, required: true},
}, { versionKey: false });

const editora = mongoose.model("editoras", editoraSchema);

export { editora, editoraSchema };