// importazione
const postsData = require('../data/postsData');  

// funzioni
const index = (req, res) => {
    res.json({
        message: "Visualizzo la lista di tutti i posts",
        data: postsData
    });
};

const show = (req, res) => {
    res.json({
        message: "Visualizzo un elemento della lista post",
    });
};

const store = (req, res) => {
    res.json({
        message: "creo un nuovo elemento",
    });
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
    res.json({
        message: "elimino post",
    });
};

// esportazione
module.exports = { 
    index,
    show,
    store,
    update,
    modify,
    destroy };