import mongoose from "mongoose"; // Importa a biblioteca Mongoose, que é usada para modelar dados no MongoDB

//função assíncrona responsavel para estabelecer conexão com db
async function conectaNaDataBase() {
    mongoose.connect(process.env.DB_CONNECTION_STRING) // Conecta ao MongoDB usando a string de conexão armazenada na variável de ambiente 

    return mongoose.connection;
}

export default conectaNaDataBase
