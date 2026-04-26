// Importa o modelo "editora", que provavelmente é um Mongoose Model para acessar o banco de dados de editoras.
import editora from "../models/Editora.js";

// Define uma classe controller responsável por gerenciar as operações CRUD para o recurso Editora.
class EditoraController {

    // Método estático para listar todas as editoras.
    static async listarEditoras(req, res) {
        try {
            // Busca todas as editoras no banco de dados.
            const editoras = await editora.find();
            // Retorna a lista de editoras com o status 200 (OK).
            res.status(200).json(editoras);
        } catch (error) {
            // Em caso de erro, retorna status 500 e mensagem de erro.
            res.status(500).json({ message: error.message });
        }
    };

    // Método estático para listar uma editora específica pelo id.
    static async listarEditoraPorId(req, res) {
        try {
            // Pega o id da editora a partir dos parâmetros da rota.
            const id = req.params.id;
            // Busca a editora no banco de dados pelo id fornecido.
            const editoraResult = await editora.findById(id);
            // Retorna a editora encontrada com status 200 (OK).
            res.status(200).json(editoraResult);
        } catch (error) {
            // Em caso de erro, retorna status 500 e mensagem de erro.
            res.status(500).json({ message: error.message });
        }
    };

    // Método estático para criar (cadastrar) uma nova editora.
    static async cadastrarEditora(req, res) {
        try {
            // Cria uma nova editora no banco de dados usando os dados enviados no corpo da requisição.
            const novaEditora = await editora.create(req.body);
            // Retorna a editora criada e status 201 (Criado).
            res.status(201).json(novaEditora);
        } catch (error) {
            // Em caso de erro, retorna status 500 e mensagem de erro.
            res.status(500).json({ message: error.message });
        }
    };

    // Método estático para atualizar uma editora existente.
    static async atualizarEditora(req, res) {
        try {
            // Pega o id da editora a partir dos parâmetros da rota.
            const id = req.params.id;
            // Atualiza a editora pelo id com os novos dados enviados no corpo da requisição.
            // O parâmetro { new: true } faz com que o método retorne o documento atualizado.
            const editoraAtualizada = await editora.findByIdAndUpdate(id, req.body, { new: true });
            // Retorna a editora atualizada e status 200 (OK).
            res.status(200).json(editoraAtualizada);
        } catch (error) {
            // Em caso de erro, retorna status 500 e mensagem de erro.
            res.status(500).json({ message: error.message });
        }
    };

    // Método estático para deletar uma editora.
    static async deletarEditora(req, res) {
        try {
            // Pega o id da editora a partir dos parâmetros da rota.
            const id = req.params.id;
            // Remove a editora pelo id.
            await editora.findByIdAndDelete(id);
            // Retorna mensagem de sucesso e status 200 (OK).
            res.status(200).json({ message: "Editora deletada com sucesso" });
        } catch (error) {
            // Em caso de erro, retorna status 500 e mensagem de erro.
            res.status(500).json({ message: error.message });
        }
    };
}

// Exporta a classe para ser usada em outras partes da aplicação.
export default EditoraController;