const mongoose = require('mongoose')

const characterSchema = new mongoose.Schema({
  char_id: {
    type: Number,
    min : 1,
    max:  116,
    required: [true, 'Please enter a character id between 1-116']
  },
  name: {
    type: String,
    required: [true, 'Please enter the full name of the character']
  },
  birthday: {
    type: String,
    required: [true, "Please enter the character's birthday"]
  },
  occupation: {
    type: Array,
    required: [true, "Please enter the list of character's known occupation"]
  },
  img: {
    type: String,
    required: [true, 'Please enter the image url']
  },
  status: {
    type: String,
    required: [true, 'Are they alive(or did Heisenberg get to them??']
  },
  nickname: {
    type: String,
    required: [true, 'Please enter a known nickname they are referred as']
  },
  appearance: {
    type: Array,
    required: [true, 'Please enter the list of seasons that the character appeared in']
  },
  portrayed: {
    type: String,
    required: [true, 'Please enter the actor/actress that portrayed the character']
  },
  category: {
    type: Array,
    required: [true, 'Please enter the series that the character is involved with']
  }
})

module.exports = mongoose.model('Character', characterSchema)