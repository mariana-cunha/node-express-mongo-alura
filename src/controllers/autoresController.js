import { autor } from '../models/Autor.js'

class AutorController {

    static async listarAutores(req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falha ao carregar listagem de autores`
            })
        }
    };

    static async buscarAutorPorId (req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            res.status(200).json(autorEncontrado);
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falha ao carregar autor`
            })
        }
    };

    static async cadastrarAutor (req, res) {
        try {
            const novoAutor = await autor.create(req.body)
            res.status(201).json({
                message: "autor cadastrado com sucesso",
                autor: novoAutor
            })
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falha ao cadastrar autor`
            })
        }
    };

    static async atualizarAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: 'autor atualizado'});
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falha na atualização`
            })
        }
    };

    static async deletarAutor (req, res) {
        try {
            const id = req.params.id;
            await autor.findByIdAndDelete(id);
            res.status(200).json({message: 'autor removido com sucesso'});
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - falha na exclusão`
            })
        }
    };


};

export default AutorController;
