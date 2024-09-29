'use strict';

const path = require("path");
const { VueLoaderPlugin } = require('vue-loader');
const dataObj = require("./data/data.json");

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/dist/',
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				use: 'vue-loader',
			},
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader'
				]
			},
			{
				test: /\.(ttf|eot|woff|woff2)$/,
				use: {
					loader: 'url-loader',
					options: {
						name: '[name].[ext]',
					},
				},
			},
			{
				test: /\.svg$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]',
						},
					},
				],
			},
		],
	},
	plugins: [
		new VueLoaderPlugin(),
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, 'src'),
			fonts: path.resolve(__dirname, 'src/assets/fonts'),
		},
		extensions: ['.js', '.vue', '.json', '.svg'], // Ensure this line is outside of module.rules
	},
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		port: 9000,
		historyApiFallback: true,
		before: function (app, server, compiler) {
			app.get('/api/categories', (req, res) => {
				res.json(dataObj.categories);
			});
			app.get('/api/category/*', (req, res) => {
				res.json(dataObj.articles);
			});
			app.get('/api/author/*', (req, res) => {
				let author = {};
				const authorId = req.params['0'];
				for (let index = 0; index < dataObj.authors.length; index++) {
					if (dataObj.authors[index].id === authorId) {
						author = dataObj.authors[index];
						break;
					}
				}
				res.json(author);
			});
			app.get('/api/search/*', (req, res) => {
				res.json(dataObj.articles);
			});
		},
	},
};
