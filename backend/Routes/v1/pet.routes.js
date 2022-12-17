const express = require('express');
const { getAllPets, getPetDetails, addPet, updatePet, deletePet, getAllPetsAdopted, updateAdopted } = require('../../Controllers/pet.controllers');

const router = express.Router();

router.route('/')
.get(getAllPets)
.post(addPet)
router.route('/adopted').get(getAllPetsAdopted).patch(updateAdopted)
router.route('/:id')
.get( getPetDetails)
.patch(updatePet)
.delete(deletePet)

module.exports  = router;