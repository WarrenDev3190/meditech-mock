import webpack from 'webpack';
import path from 'path';


module.exports = {
	entry: path.join(__dirname,'../../app/index'),
	output: {
		filename: 'bundle.js',
		path: path.join(__dirname, '../../public/dist/js'),
		publicPath: '/static/'
	},
	devTools: ['eval-source-maps'],
	plugins: [ new webpack.NoErrorsPlugin() ],
	module: {
		loaders: [
			{
				test: /\.js?$/,
				loaders: ['babel'],
				include: path.join(__dirname, '../../app'),
				exclude: /node_modules/
			}
		]
	}
}