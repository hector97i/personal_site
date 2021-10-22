const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, './public'),
		filename: '[name].js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.(s*)css$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					'sass-loader',
				],
			},
			{
				test: /\.(png|gif|jpg|svg)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: 'assets/[hash].[ext]',
						},
					},
				],
			},
		],
	},
	optimization: {
		minimize: true,
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				// This has effect on the react lib size
				NODE_ENV: JSON.stringify('production'),
			},
		}),
		new MiniCssExtractPlugin({
			filename: 'assets/[name].css',
		}),
	],
};