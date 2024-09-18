
import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
  id: { type: mongoose.Schema.Types.ObjectId },
  nome: { type: String, required: true },
  nacionalidade: { type: String }
}, { versionKey: false });

//criar modelo primeiro argumento string e segunda objeto 
const autor = mongoose.model("autores", autorSchema);

export { autor, autorSchema };