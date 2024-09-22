import express from 'express'
import conectaNaDataBase from './config/dbConnect.js'
import routes from "../src/routes/index.js"
import dotenv from 'dotenv';

dotenv.config();
const conexao = await conectaNaDataBase()

conexao.on("error", (erro) => {
  console.error("Erro de conexão", erro)
})

conexao.once("open", () => {
  console.log("Conexão com o banco de dados feita com sucesso")
})

const app = express()
routes(app) 


export default app

