const express = require('express');

const router = express.Router();
const { Game } = require('../db/models');

router.post('/', async (req, res) => {
	const { userId, totalScore } = req.body;
	await Game.create({ userId, totalScore });
	const maxScore = await Game.max('totalScore');
	res.json(maxScore);
});


module.exports = router;