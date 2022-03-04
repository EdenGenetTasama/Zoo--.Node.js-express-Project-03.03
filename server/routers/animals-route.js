
const express = require('express');
const router = express.Router();
const animalControllers = require('../controllers/animals-cntrl');

router.get('/' , animalControllers.getAllAnimals);

router.post('/' , animalControllers.postAnimals)

module.exports= router;