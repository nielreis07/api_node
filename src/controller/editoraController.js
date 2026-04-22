import editora from "../models/Editora.js";

class EditoraController {

    static async listarEditoras(req, res) {
        try {
            const editoras = await editora.find();
            res.status(200).json(editoras);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    static async listarEditoraPorId(req, res) {
        try {
            const id = req.params.id;
            const editora = await editora.findById(id);
            res.status(200).json(editora);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    static async cadastrarEditora(req, res) {
        try {
            const editora = await editora.create(req.body);
            res.status(201).json(editora);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    static async atualizarEditora(req, res) {
        try {
            const id = req.params.id;
            const editora = await editora.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).json(editora);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };

    static async deletarEditora(req, res) {
        try {
            const id = req.params.id;
            await editora.findByIdAndDelete(id);
            res.status(200).json({ message: "Editora deletada com sucesso" });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
}

export default EditoraController;