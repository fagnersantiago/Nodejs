
const express =  require ('express');
const consign =  require ('consign');

let app = express();

consign().include('Routers').into(app);

    app.listen(3000, '127.0.0.1', ()=>{

        console.log('Servidor rodando!'); 
    });



