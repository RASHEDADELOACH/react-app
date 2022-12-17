const express = require("express")
const { getAllJokes, getSingleJoke, addJoke, deleteJoke, updateJoke } = require("../../Controllers/jokes.controllers")
const router = express.Router()

router.get('/', getAllJokes)
router.get('/:id', getSingleJoke)
router.post('/', addJoke)
router.delete('/:id', deleteJoke)
router.patch('/:id', updateJoke)
