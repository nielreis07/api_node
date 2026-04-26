import mongoose from "mongoose";
import connectDataBase from "../config/dbConnect.js";

await connectDataBase();

const db = mongoose.connection;

const autorSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, default: () => new mongoose.Types.ObjectId() },
    nome: { type: String, require: true },
    nacionalidade: { type: String, require: true }
}, { versionKey: false });

const autor = db.model("Autor", autorSchema);

export default autor;