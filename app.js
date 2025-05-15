// importazione
const express = require('express');
const appUrl = require('./data/config');
const postsRouter = require('./router/posts');
const bodyParser = require('body-parser')

// inizializzazione
const app = express();

// Middleware
app.use(express.json()); //* body parsers middleware
app.use(express.urlencoded({ extended: true })); //* body parsers form-data
app.use("/imgs", express.static("data/imgs")); //* static assets


// Registrare il router dei post
app.use("/posts", postsRouter);

// avvio del server 
app.listen(appUrl.appPort, () => {
    console.log(`Ascolto l'app all'URL ${appUrl.appUrl}`);
})