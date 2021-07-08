const path = require("path")

const rootPath = path.resolve(process.cwd())
const srcPath = path.resolve(rootPath, "src")
const coverageDir = path.resolve(rootPath, "report/coverage")
const configPath = path.resolve(__dirname, "../jest.config.js")
const setupFilesAfterEnvPath = path.resolve(
	__dirname,
	"../jest.setup.js"
)
const transformerPath = path.resolve(
	__dirname,
	"../utils/transformer.js"
)

module.exports = {
	srcPath,
	coverageDir,
	configPath,
	setupFilesAfterEnvPath,
	transformerPath,
}
