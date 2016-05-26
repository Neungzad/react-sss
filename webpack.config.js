var path = require('path');
	
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: path.resolve(__dirname, 'app/index.html'),
	filename: 'index.html',
	inject: 'body'
})

module.exports = {
	entry: [
		'webpack/hot/dev-server',
		path.resolve(__dirname, 'app/index.jsx')
	],
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: "index_bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx$/, 
				exclude: /node_modules/,
				loader: "babel-loader"
			}
		]
	},
	plugins: [HtmlWebpackPluginConfig]
}