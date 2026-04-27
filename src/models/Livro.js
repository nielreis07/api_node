import mongoose from "mongoose";
import connectDataBase from "../config/dbConnect.js";

await connectDataBase();

const db = mongoose.connection;

const livroSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
    titulo: { type: String, required: true },
    editora: { type: String },
    preco: { type: Number },
    pagina: { type: Number },
}, { versionKey: false, collection: "livros" });

const livro = db.model("Livro", livroSchema);

export default livro;
