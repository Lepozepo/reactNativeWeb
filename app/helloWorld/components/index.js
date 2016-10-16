let components = {};
if (process.env.PLATFORM === 'web') {
	components = require('./web');
} else {
	components = require('./native');
}

module.exports = components;
