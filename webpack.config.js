const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/index.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "index_bundle.js"
	},

	module: {
		rules: [
			{
				test: /\.(js)$/,
				use: "babel-loader",
				exclude: /node_modules\/(?![bright\-components])/
			}
		]
	},

	resolve: {
		alias: {
			components: path.resolve(
				__dirname,
				"./node_modules/bright-components/src/components"
			),
			constants: path.resolve(
				__dirname,
				"./node_modules/bright-components/src/constants"
			),
			utils: path.resolve(
				__dirname,
				"./node_modules/bright-components/src/utils"
			),
			animations: path.resolve(
				__dirname,
				"./node_modules/bright-components/src/animations"
			)
		},
		modules: [path.resolve(__dirname, "loaders"), "node_modules"],
		symlinks: false
	},

	mode: "development",

	plugins: [
		new HtmlWebpackPlugin({
			template: "src/index.html"
		})
	]
};
