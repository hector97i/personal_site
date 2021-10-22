const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: './src/index.jsx',
	output: {
		path: path.resolve(__dirname, './public'),
		filename: '[name].js',
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
  resolve: {
    modules: [path.resolve(__dirname, 'node_modules'), 'node_modules']
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
    new HtmlWebpackPlugin({
      templateContent: 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Hector Duran</title>
</head>
<body>
    <div id="app"></div>
</body>
</html>
`
    }),
	],
};
