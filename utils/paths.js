const path = require("path")

const rootPath = path.resolve(process.cwd())
const srcPath = path.resolve(rootPath, "src")
const coverageDir = path.resolve(rootPath, "report/coverage")
const configPath = path.resolve(__dirname, "../jest.config.js")

module.exports = {
	srcPath,
	coverageDir,
	configPath,
}
