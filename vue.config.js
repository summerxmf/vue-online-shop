const path = require('path')
const bodyParser = require('body-parser')
const axios = require('axios')

function resolve (dir) {
	console.log(__dirname)
	return path.join(__dirname, dir)
}

module.exports = {
	devServer: {

	},
	chainWebpack (config) {		
	    config.resolve.alias
	      .set('pages', resolve('src/pages'))
	      .set('components', resolve('src/components'))
	      .set('assets', resolve('src/assets'))
	      .set('api', resolve('src/api'))
	      .set('base', resolve('src/base'))

	    config.plugin('context')
	      .use(webpack.ContextReplacementPlugin,
	        [/moment[/\\]locale$/, /zh-cn/])
		},
		publicPath: ''
}