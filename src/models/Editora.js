import mongoose, { Schema, Types } from "mongoose";

const editoraSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    nome: { type: String, required: true },
    cidade: { type: String },
    cnpj: { type: String, required: true },
}, { versionKey: false });

const editora = mongoose.model("editoras", editoraSchema);

export default editora;
