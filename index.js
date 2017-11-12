const chalk = require('chalk');

chalk.random = str =>
  chalk.hex(Math.floor(Math.random() * 16777215).toString(16))(str);

module.exports = chalk;