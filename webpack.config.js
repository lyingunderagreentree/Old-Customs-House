var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	devtool: 'inline-source-map',
	devServer: {
		contentBase: './dist',
		port: 9000,
		hot: true
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				},
			},
			{
				test: /\.scss$/,
				exclude: /node_modules/,
				use: ["style-loader", "css-loader", "sass-loader",
					{
						loader: 'sass-resources-loader',
						options: {
							resources: './src/styles/mixins.scss'
						}
					}	
				]
			},
			{
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1
            }
          }
        ]
      }
		]
	},

	plugins: [
		//new HtmlWebpackPlugin(__dirname + 'dist'),
		new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
		new webpack.HotModuleReplacementPlugin()
	]
};