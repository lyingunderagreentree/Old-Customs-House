var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

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
				test: /\.css$/,
				use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'postcss-loader' }]
			},
			{
				test: /\.(scss|sass)$/,
				exclude: /node_modules/,
				use: [
					"style-loader", 
					"css-loader", 
					"postcss-loader", 
					"sass-loader",
					{
						loader: 'sass-resources-loader',
						options: {
							resources: [
								'./src/styles/mixins.scss', 
								'./src/styles/variables.scss', 
								'./src/styles/bulma-custom-variables.sass'
							]
						}
					},
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