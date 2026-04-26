import livro from "../models/Livro.js";

class livroController {

    static async listaLivros(req, res) {
        try {
            const listaLivros = await livro.find()
            console.log(listaLivros);
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "criado com sucesso", livro: novoLivro });
        } catch (erro) {
            res.status(500).json({ message: `${erro.message} - falha ao cadastrar livro` });
        }
    }

    static async listarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livro = await livro.findById(id);
            res.status(200).json(livro);
        } catch (error) {
            res.status(404).json({ message: "Livro não encontrado" });
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "livro atualizado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async deletarLivro(req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({ message: "livro deletado com sucesso" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default livroController;