import express from "express";
import connectDb from "./config/dbConnect.js";
import livro from "./models/Livro.js";
import routes from "./routes/index.js";

const connect = await connectDb();
connect.on("error", (erro) => {
    console.error("erro de conexão: ", erro)
});

connect.once("open", () => {
    console.log("conexão com o banco feita com sucesso");
})

const app = express();
routes(app);

app.delete("/livros/:id", (req, res) => {
    const index = buscaLivro(req.params.id);
    livros.splice(index, 1);
    res.status(204).send("livro removido com sucesso");
});

export default app;
