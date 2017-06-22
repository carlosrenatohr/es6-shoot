var path = require('path');
module.exports = {
	entry: './src/js/app.js',
	output: {
		path: path.resolve(__dirname, 'public'),
		publicPath: 'public',
		filename: 'bundle.js'
	}
}