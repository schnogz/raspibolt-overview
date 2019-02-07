const util = require('util')

const functionMap = {
  getDate: 'getDate.sh'
}

executeBashScript = async (cmd) => {
  const exec = util.promisify(require('child_process').exec)
  console.log(functionMap[cmd])
  return await exec(`bash ${__dirname}/scripts/${functionMap[cmd]}`)
}

module.exports = {
  executeBashScript
}
