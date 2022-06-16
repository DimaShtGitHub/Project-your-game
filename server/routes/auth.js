const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.post('/signup', async (req, res) => {
	const { name, email, password } = req.body;
	try {
		const loginUser = await User.findOne({ where: { name } });
		if (loginUser) {
			return res.status(401).json({ message: 'Логин или email существуют' });
		}
		const emailUser = await User.findOne({ where: { email } });
		if (emailUser) {
			return res.status(401).json({ message: 'Логин или email существуют' });
		}
		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = await User.create({ name, email, password: hashedPassword });
		req.session.user = {
			id: newUser.id,
			name: newUser.name,
		};
		const userForClient = { id: newUser.id, name, email };
		res.json(userForClient);
	} catch (err) {
		return res.status(500).json({ message: 'Сервер временно недоступен, попробуйте позже' });
	}
});

router.post('/signin', async (req, res) => {
	const { name, password } = req.body;
	try {
		const user = await User.findOne({ where: { name } });

		if (!user) return res.status(401).json({ message: 'Неверный логин или пароль' });

		const isSame = await bcrypt.compare(password, user.password);
		if (!isSame) return res.status(401).json({ message: 'Неверный логин или пароль' });

		req.session.user = { // записываем в req.session.user данные (id & name) (создаем сессию)
			id: user.id,
			name: user.name,
		};
		res.json(user);
	} catch (err) {
	  return res.status(500).json({ message: 'Сервер временно недоступен, попробуйте позже' });
	}
});

router.post('/logout', (req, res) => {
	req.session.destroy();
	res.clearCookie('cookieYourGame');
	res.sendStatus(200);
});

router.get('/:id', async (req, res) => {
	try {
		if (req.session?.user) {
			const curUser = await User.findByPk(req.params.id);
			res.json(curUser);
		} else {
			res.status(409).end();
		}
	} catch (err) {
		console.log(err.message);
	}

})

module.exports = router;
