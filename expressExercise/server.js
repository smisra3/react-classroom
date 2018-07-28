const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const products = require('./routes/products');
const users = require('./routes/users');

// const db = 'mongodb://localhost:27017/ecommerce';
const db = 'mongodb://localhost:27017/users';

mongoose.connect(db, { useNewUrlParser: true })
  .then(
    () => { console.log("DB is connected") },
    err => { console.log("error in connecting: ", err) }
  );

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/products', products);
app.use('/authenticate', users);

app.get('/', (request, response) => {
  response.send('<h1>Hello World!!</h1>')
});
app.get('/first', (request, response) => {
  response.send('<h1>Hello World!!</h1><h2>You are on the first page</h2>')
});

app.listen(3200, () => console.log('Bam!! Server up on 3200'));
