const express = require('express')
const { findByIdAndDelete } = require('../models/character')
const router = express.Router()
const Character = require('../models/character')



//Post request
router.post('/store-to-database', async (req, res) => {
  const character = new Character({
    ...req.body
  })

  try{
    const newCharacter = await character.save()
    res.status(201).json(newCharacter)
  } catch(e){
    res.status(400).send(e)
    console.log(e)
  }
})

//Delete request
router.delete('/:id', async(req,res) => {
  try{
    const character = await Character.findByIdAndDelete({ _id: req.params.id })
    if(!character){
      res.status(404).send()
    }
    res.send(await Character.find({}))
  } catch(e){
    res.status(500).send()
    console.log(e)
  }
})

module.exports = router
