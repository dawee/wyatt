var logger = module.exports = {};

var levels = {
  silent: 0,
  error: 1,
  warning: 2,
  info: 3,
  debug: 4,
};

logger.setLevel = function (lvl) {
  if (levels.hasOwnProperty(lvl)) logger.level = levels[lvl];
};

logger.log = function (lvl, msg) {
  if (levels.hasOwnProperty(lvl) && levels[lvl] <= logger.level) {
    console.log('Wyatt [' + lvl.toUpperCase() + '] ' + msg);
  }
};

Object.keys(levels).forEach(function (lvl) {
  logger[lvl] = function (msg) {
    logger.log(lvl, msg);
  };
});

// default level: 'error'
logger.setLevel('error');