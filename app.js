// importazione
const express = require('express');
const appUrl = require('./data/config');
const postsRouter = require('./router/posts');

// inizializzazione
const app = express();

// Middleware per il parsing del body delle richieste
app.use(express.json());

// Servire file statici dalla cartella data/imgs con il prefisso /imgs
app.use("/imgs", express.static("data/imgs"));

// Registrare il router dei post
app.use("/posts", postsRouter);

// avvio del server 
app.listen(appUrl.appPort, () => {
    console.log(`Ascolto l'app all'URL ${appUrl.appUrl}`);
})