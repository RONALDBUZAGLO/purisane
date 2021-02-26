//declaração e configuração do express
const express = require('express');
const app = express();
const port = 3000;

//Set do ejs como engine
app.set('view engine','ejs');

//Configurar pasta de arquivos estáticos
//super importante: o EJS não funciona se a estrutura de 
//pastas não estiver correta
app.use(express.static('public'));

//Rotas
app.get('/', (req, res) => {
    res.render('pages/index');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`);
});
