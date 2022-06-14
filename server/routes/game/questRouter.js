const express = require('express')
const router = express.Router()
const { Category, Question } = require('../../db/models')

router.get('/', async (req, res) => {
  const nameCategory = await Category.findAll()
  res.json(nameCategory) 
})

router.get('/all', async (req, res) => {
  const allQuestions = await Question.findAll()
  res.json(allQuestions) 
})

module.exports = router
