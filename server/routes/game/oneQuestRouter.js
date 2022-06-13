const express = require('express')
const router = express.Router();
const {Question} = require('../../db/models')

router.post('/', async (req, res) => {
  const {id, score} = req.body
  const quest = await Question.findOne({where: {categoryId: id, score}})
  res.json(quest)
})

module.exports = router
