import livro from "../models/Livro.js";

class LivroController {

    static async listaLivros(req, res) {
        try {
            const livros = await livro.find();
            res.status(200).json(livros);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = new livro(req.body);
            await novoLivro.save();
            res.status(201).json({ message: "Livro criado com sucesso", livro: novoLivro });
        } catch (error) {
            res.status(500).json({ message: `${error.message} - falha ao cadastrar livro` });
        }
    }

    static async obterLivro(req, res) {
        try {
            const { id } = req.params;
            const livroEncontrado = await livro.findById(id);
            if (livroEncontrado) {
                res.status(200).json(livroEncontrado);
            } else {
                res.status(404).json({ message: "Livro não encontrado" });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async atualizarLivro(req, res) {
        try {
            const { id } = req.params;
            const livroAtualizado = await livro.findByIdAndUpdate(id, req.body, { new: true });
            if (livroAtualizado) {
                res.status(200).json({ message: "Livro atualizado com sucesso", livro: livroAtualizado });
            } else {
                res.status(404).json({ message: "Livro não encontrado" });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    static async deletarLivro(req, res) {
        try {
            const { id } = req.params;
            const livroDeletado = await livro.findByIdAndDelete(id);
            if (livroDeletado) {
                res.status(200).json({ message: "Livro deletado com sucesso" });
            } else {
                res.status(404).json({ message: "Livro não encontrado" });
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default LivroController;