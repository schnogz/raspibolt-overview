const util = require('util')

// cmd must match name of shell script exactly
executeBashScript = async (cmd) => {
  const exec = util.promisify(require('child_process').exec)
  return await exec(`bash ${__dirname}/scripts/${cmd}.sh`)
}

module.exports = {
  executeBashScript
}
