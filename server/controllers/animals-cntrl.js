const animalsModel = require('../models/animals-model');

const getAllAnimals = (req,res)=>{
    res.send("get")
}

const postAnimals = async (req , res)=>{
    await animalsModel
    .create(req.body)
    .then(result => res.send(result))
    .catch(err => res.status(404).send({ massage: err }))
}
module.exports = {getAllAnimals,postAnimals}