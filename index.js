import express from 'express';


const host = '000.0.0.0'; //rede disponivel
const porta = 3000; //porta
const app = express();


app.listen(porta, host, () => {
console.log(`Servidor estará rodando em http://${host}:${porta}`);
}); 