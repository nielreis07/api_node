import mongoose from "mongoose";
import connectDataBase from "../config/dbConnect.js";

await connectDataBase();

const db = mongoose.connection;

const editoraSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
    nome: { type: String, required: true },
    cidade: { type: String },
    cnpj: { type: String, required: true },
}, { versionKey: false });

const editora = db.model("Editora", editoraSchema);

export default editora;