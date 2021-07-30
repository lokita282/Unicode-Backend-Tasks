const express = require('express')
const router = express.Router()
const Character = require('../models/character')



//Post request
router.post('/store-to-database', async (req, res) => {
  const character = new Character({
    char_id: req.body.char_id,
    name: req.body.name,
    birthday: req.body.birthday,
    occupation: req.body.occupation,
    img: req.body.img,
    status: req.body.status,
    nickname: req.body.nickname,
    appearance: req.body.appearance,
    portrayed: req.body.portrayed,
    category: req.body.category,
  })

  try{
    const newCharacter = await character.save()
    res.status(201).json(newCharacter)
  } catch(e){
    res.status(400).send(e)
  }
})

module.exports = router
