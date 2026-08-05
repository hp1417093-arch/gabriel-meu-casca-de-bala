const express = require('express');
const app = express();
const porta = 3000

const produtos = [
    {
      id : 1, nome : "teclado", valor : 129.99
    },
    {
        id : 2, nome : "monitor 244hz oled", valor : 2329.99
    }
]
//console.log(produtos[1].nome)
//console.log("============")
produtos.push({ nome : 3, nome : "mouse attack shark x11", valor : 329.99 })
//console.log(produtos)

for (let index = 0; index < produtos.length; index++) {
    const produto = produtos[index];
    if (produto.nome === 2){
    console.log(produto)
    }
}

produtos.find(function () {

})


app.get('/teste', (res, req) => {
    console.log("Hello World")
})
app.get('/produto/:nome',(req, res) => {
    if(!parseInt(req.params.nome)){
        res.send("Valor do nome deve ser texto")
    } const nome = parseINT(Request.params.nome);
    procurarProduto(nome)
    res.send("foi")
})
app.listen(porta, () => {
     console.log("servidor iniciado na porta: " + porta)
})