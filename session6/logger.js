const logger = require('./logger.js');



let version = 2.6
function log()
{
    console.log("logged successfully");
}

// module.exports.log;
// module.exports.version = version;

// module.exports = { 
//     log : log,
//     version : version
// }

//these two blocks are the same 
exports.log;
exports.version = version;