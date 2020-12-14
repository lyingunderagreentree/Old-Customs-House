const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	devtool: 'inline-source-map',
	optimization: {
		minimize: true,
		minimizer: [
			new UglifyJsPlugin({
				test: /\.js(\?.*)?$/i,
				exclude: /node_modules/
			}),
		],
	},
	devServer: {
		contentBase: './build',
		port: 9000,
		hot: true
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'build')
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
				test: /\.(png|jpe?g|JPG|gif)$/i,
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
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
      template: "./src/index.html"
		}),
		new ImageminPlugin({
			test: /\.(jpe?g|png|gif|svg)$/i,
			optimizationLevel: 9
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};