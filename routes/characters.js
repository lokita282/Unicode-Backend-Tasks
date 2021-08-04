const express = require('express')
const { findByIdAndDelete } = require('../models/character')
const router = express.Router()
const Character = require('../models/character')



//Post request (Task3)
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

//Delete request (Task 4)
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

//Update Request (Task 4 - Bonus)
router.put('/:id', async (req, res) => {
  try{
    const updates = Object.keys(req.body)
    const character = await Character.findById(req.params.id)

    if(!character){
      res.status(404).send()
    }

    updates.forEach((update) => character[update] = req.body[update])
    await character.save()

    res.send(character)

  } catch(e){
    res.status(400).send()
  }
})

module.exports = router
