const express = require('express');

const router = express.Router();
const { Category, Question } = require('../db/models');

router.get('/categories', async (req, res) => {
	const categories = await Category.findAll({ raw: true });
	res.json(categories);
});

router.get('/questions', async (req, res) => {
	const allQuestions = await Question.findAll({ raw: true });
	res.json(allQuestions);
})

module.exports = router
