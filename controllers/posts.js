// importazione
const postsData = require('../data/postsData');  

// funzioni
const index = (req, res) => {
    let filteredPost = postsData;

    //se l'utente ha inserito un tag nella query string, filtra i post
    if (req.query.tag) {        
        let filteredPost = postsData;
    };

    // Se l'utente ha inserito un tag nella query string, filtra i post
    if (req.query.tag) {
        const tagQuery = req.query.tag.toLowerCase(); // Converto il tag cercato in minuscolo

        filteredPost = postsData.filter(post => 
        //! Verifica che post.tags sia un array con Array.isArray(post.tags), per evitare errori
            Array.isArray(post.tags) && post.tags.some(tag => tag.toLowerCase() === tagQuery)
        //! .some() al posto di .includes()
        //* Controlla se almeno un elemento dell'array soddisfa una condizione.
        //* Permette di trasformare ogni elemento prima del confronto (ad esempio, con .toLowerCase()).
        );
    }

    // se non ci sono post con il tag cercato, restituisco errore 404 
    if (filteredPost.length === 0) {
        return res.status(404).json({
            error: "Nessun post trovato con questo tag"
        });
    }

    // Restituisce la lista filtrata o completa
    res.json({
        message: req.query.tag
        ? "Visualizzo i posts con i tag indicati"
        : "Visualizzo tutti i posts",
    //! ? - : operatore ternario scritto in modo compatto
    //! sostituisce il solito if...else
        data: filteredPost
    });

};

const show = (req, res) => {
    // recupero l'id dall'url
    const id = parseInt(req.params.id);

    // cerchiamo il post tramite l'id
    const post = postsData.find(post => post.id === id);

    //controllo se l'id esiste se no do errore 404
    if(!post) {
        return res.json({
            error: "404 - Not found",
            message: "Post non trovato"
        })
    };

    // restituisco sotto forma di JSON
    res.json(post);
};

const store = (req, res) => {
    console.log('Dati ricevuti:', req.body);
    res.status(201).send({ message: 'Post creato!', data: req.body });
};

const update = (req, res) => {
    res.json({
        message: "sostituisco/modifico interamento un post",
    });
};

const modify = (req, res) => {
    res.json({
        message: "modifico parzialmente un post",
    });
};

const destroy = (req, res) => {
    // Recupero l'id dall'URL e lo converto in numero
    const id = parseInt(req.params.id);

    // Trovo l'indice del post con l'ID specificato
    const postIndex = postsData.findIndex(post => post.id === id);

    // Se il post non esiste, restituisco errore 404
    if (postIndex === -1) {
        return res.status(404).json({
            error: "404 - Not Found",
            message: `Nessun post trovato con ID ${id}`
        });
    }

    // Rimuovo il post dalla lista
    postsData.splice(postIndex, 1);

    // Stampiamo la lista aggiornata nel terminale
    console.log("Lista aggiornata dei post:", JSON.stringify(postsData, null, 2));

    // Restituisco uno stato 204 No Content (nessun contenuto)
    res.status(204).send();
};

// esportazione
module.exports = { 
    index,
    show,
    store,
    update,
    modify,
    destroy };