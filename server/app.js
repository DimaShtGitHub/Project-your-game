require('dotenv').config();

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const session = require('express-session');
const cors = require('cors');

const FileStore = require('session-file-store')(session);

const authRouter = require('./routes/auth');

const app = express();
const PORT = process.env.PORT ?? 3001;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

const sessionConfig = {
	name: 'cookieYourGame',
	store: new FileStore(),
	secret: 'secretYourGame',
	resave: false,
	saveUninitialized: false,
	cookie: { secure: false, maxAge: 1000 * 60 * 60 * 24 * 14 },

};

app.use(session(sessionConfig));

app.use(cors());

// app.use((req, res, next) => {
// 	const accessList = [
// 		'http://localhost:3000',
// 		'http://localhost:3001',
// 		'http://localhost:3002',
// 	];
// 	const origin = req.get('origin');
// 	if (accessList.includes(origin)) { // если в списке есть адрес того, кто обращается к серверу, то делаем для него заголовок
// 		res.header('Access-Control-Allow-Origin', origin);
// 		res.header('Access-Control-Allow-Headers', 'Content-type');
// 		res.header('Access-Control-Allow-Credentials', true);
// 	}
// 	next();
// });

app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.render('error');
});

app.listen(PORT, console.log(`server on port: http://localhost:${PORT}`))
