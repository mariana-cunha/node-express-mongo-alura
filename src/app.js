import express from "express";
import connectDb from "./config/dbConnect.js";
import livro from "./models/Livro.js";

const connect = await connectDb();
connect.on("error", (erro) => {
    console.error("erro de conexão: ", erro)
});

connect.once("open", () => {
    console.log("conexão com o banco feita com sucesso");
})

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Curso de Node.js@;!:!");
});

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
});

app.get("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index]);
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).send("livro cadastrado com sucesso")
});

app.put("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
});

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(204).send("livro removido com sucesso");
});

export default app;
