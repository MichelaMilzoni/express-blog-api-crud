// importazione
const express = require("express");
const postController = require('../controllers/posts')

// inizializzazione variabile router il cui valore è un'istanza di express()
const router = express.Router();

// rotte
router.get('/', postController.index);
router.get('/:id', postController.show);
router.post('/', postController.store);
router.put('/:id', postController.update);
router.patch('/:id', postController.modify);
router.delete('/:id', postController.destroy);

// esportazione
module.exports = router;