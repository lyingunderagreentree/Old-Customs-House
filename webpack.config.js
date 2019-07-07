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
				test: /\.(ttf|eot|woff|woff2|otf)$/,
				exclude: /node_modules/,
				use: {
					loader: "file-loader",
					options: {
						name: "fonts/[name].[ext]",
					},
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
				exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1
            }
          }
        ]
			},
			{
				test: /\.svg$/,
				exclude: /node_modules/,
				loader: 'svg-inline-loader',
				options: {
					removeSVGTagAttrs: false,
					removeTags: false
				}
    	}
		]
	},

	plugins: [
		new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
		new webpack.HotModuleReplacementPlugin()
	]
};