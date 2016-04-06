import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import logger from 'morgan';
import path from 'path';
import util from 'util';
import webpack from 'webpack';
import WebpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from './constants/webpack.config';

import index from './routes/index';

const app = express();

app.use(cookieParser());
app.use(session({
	resave: false,
	saveUninitialized: false,
	secret: 's3kr3t',
	cookie: {maxAge:600000}
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(logger('combined'));
app.use(express.static(path.join(__dirname,'public')));

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use('/',index);

if(app.get('env') === 'development'){
	app.use(WebpackDevMiddleware(webpack(webpackConfig),{
		publicPath: webpackConfig.output.publicPath,
		stats: [
			'colors'
		]
	}));
};

function startApp(config){
	app.listen(config.port, function (err) {
		if(err) util.log(err);
		util.log(`App running on port:${config.port}`);
	});
};

module.exports = startApp;
