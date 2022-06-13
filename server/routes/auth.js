const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/signup', async (req, res) => {
	console.log(44444);
	const { name, email, password } = req.body;
	try {
		console.log(33333333)
		const loginUser = await User.findOne({ where: { name } });
		console.log("loginUser", loginUser);
		if (loginUser) {
			return res.status(409).json({ message: 'Логин или email существуют' });
		}
		const emailUser = await User.findOne({ where: { email } });
		console.log("emailUser", emailUser);
		if (emailUser) {
			return res.status(409).json({ message: 'Логин или email существуют' });
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = await User.create({ name, email, password: hashedPassword });
		req.session.user = {
			id: newUser.id,
			name: newUser.name,
		};
		const userForClient = { id: newUser.id, name, email };
		console.log("!", userForClient);
		res.json(userForClient);
	} catch (err) {
		console.error(err);
	}
});

router.post('/signin', async (req, res) => {
	const { name, password } = req.body;
	try {
		const user = await User.findOne({ where: { name } });

		if (!user) return failAuth(res, 'Неправильное имя-пароль');

		const isSame = await bcrypt.compare(password, user.password);
		if (!isSame) return failAuth(res, 'Неправильное пароль-имя');
		if (isSame) {
			req.session.user = { // записываем в req.session.user данные (id & name) (создаем сессию)
				id: user.id,
				name: user.name,
			};
		}
		res.json(user);
	} catch (err) {
		console.log(err.message);
		failAuth(res, err);
	}
});


module.exports = router;