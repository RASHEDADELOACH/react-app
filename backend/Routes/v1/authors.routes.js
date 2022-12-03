const express = require('express');
const { getAllAuthors, addAuthor, getSingleAuthor, deleteAuthor, updateAuthor } = require('../../Controllers/authors.controllers');



const router = express.Router();

router.get('/',getAllAuthors);
router.post('/' ,addAuthor);
router.get('/:id' ,getSingleAuthor);
router.delete('/:id' ,deleteAuthor);
router.patch('/update/:id', updateAuthor);

module.exports = router;