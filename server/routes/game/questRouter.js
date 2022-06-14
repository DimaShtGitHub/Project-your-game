const express = require('express')
const router = express.Router()
const { Category } = require('../../db/models')

router.get('/', async (req, res) => {
  const nameCategory = await Category.findAll()
  res.json(nameCategory) 
})

module.exports = router
