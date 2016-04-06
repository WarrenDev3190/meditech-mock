require('babel-register');

var config = require('./src/server/constants/config');
require('./src/server/system')(config);