import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333); 
// GE: Busca ou lista informações
// POST: Criar alguma nova informação
//PUT: Atualizaruma informação existente
//DELETE: Deletar uma informação existente

//Corpo (Rquest Body): Dados para criação ou atualização de um registro
//Route Parametros: Identificar qual recurso eu quero atulizar ou deletar
// Quer Pametros:  Paginação, filtros, ordenação


//localhost:33333/users
