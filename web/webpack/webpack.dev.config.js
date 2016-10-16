const path = require('path');
const webpack = require('webpack');

module.exports = {
	devtool: 'cheap-module-eval-source-map',
	entry: [
		'webpack-hot-middleware/client',
		'babel-polyfill',
		path.join(__dirname, '../../index.web.js'),
	],
	output: {
		path: path.join(__dirname, '../public'),
		filename: 'bundle.js',
		publicPath: '/',
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'react'],
				},
			},
		],
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: JSON.stringify('development'),
				PLATFORM: JSON.stringify('web'),
			},
		}),
		new webpack.optimize.OccurenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoErrorsPlugin(),
	],
};
