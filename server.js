// import http from "http";
import app from './src/app.js';

const PORT = 3000;

const rotas = {
    "/": "curso de express api",
    "/livros": "entrei na rota livros",
    "/autores": "entrei na rota autores",
};

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end(rotas[req.url]);
// });


// server.listen(PORT, () => {
app.listen(PORT, () => {
    console.log("servidor escutando..")
});