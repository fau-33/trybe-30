const express = require('express');
const BooksController = require('./controllers/BooksController'); // importamos o controller aqui

const app = express();


app.use(express.json());

app.get('/books', BooksController.getAll);

