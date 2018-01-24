import path from 'path';
import webpack from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import base from './webpack.config.babel';
import websiteJson from './config/website.json';

const webpackBuildConfig = {
	entry: (() => {
		for (const key in base.entry) {
			if ({}.hasOwnProperty.call(base.entry, key)) {
				Object.assign(base.entry, {
					[key]: ['babel-polyfill', base.entry[key]],
				});
			}
		}
		return base.entry;
	})(),
	output: {
		path: path.join(__dirname, 'build', websiteJson.multiLanguage ? 'assets' : ''),
		filename: '[name]__[hash:13].chunk.js',
		publicPath: websiteJson.multiLanguage ?
			(websiteJson.domain.asset.value ? `//${websiteJson.domain.asset.value}/` : '/assets/')
		:
			'/quilljs-usage/',
	},
	module: {
		rules: base.module.rules.concat(
			Object.assign(base.module.cssRule, {
				use: ExtractTextPlugin.extract({
					fallback: 'style-loader',
					use: `${base.module.cssRule.use.css}?minimize=true!${base.module.cssRule.use.postcss}`,
				}),
			})
		),
	},
	plugins: [

		base.plugins.webpackEnvironment,

		base.plugins.copyWebpackPlugin,

		base.plugins.providePlugin,

		base.plugins.loaderOptionsPlugin,

		new webpack.optimize.CommonsChunkPlugin({
			name: 'bundle',
			filename: 'bundle__[hash:13].min.js',
		}),

		new webpack.optimize.UglifyJsPlugin({
			sourceMap: true,
		}),

		new CopyWebpackPlugin([
			{
				from: 'src/robots.txt',
				to: 'robots.txt',
			},
		]),

		// Extract the CSS into a seperate file
		new ExtractTextPlugin('[name]__[contenthash:13].min.css'),

	].concat(base.plugins.htmlWebpackPlugin),
	devtool: 'source-map',
	externals: base.externals,
};

export default webpackBuildConfig;
