import express from 'express';

const app = express();

app.use(express.json());

// GE: Busca ou lista informações
// POST: Criar alguma nova informação
//PUT: Atualizaruma informação existente
//DELETE: Deletar uma informação existente

//Corpo (Rquest Body): Dados para criação ou atualização de um registro
//Route Parametros: Identificar qual recurso eu quero atulizar ou deletar
// Quer Pametros:  Paginação, filtros, ordenação

app.get('/', (request, response) => {
    return response.json({ message: 'Hello World'});
    });

//localhost:33333/users
app.listen(3333); 