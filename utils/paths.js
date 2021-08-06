const path = require("path")

const rootPath = path.normalize(process.cwd())
const srcPath = path.join(rootPath, "src")
const coverageDir = path.join(rootPath, "report/coverage")
const configPath = path.join(__dirname, "../jest.config.js")
const setupFilesAfterEnvPath = path.join(
	__dirname,
	"../jest.setup.js"
)
const setupExtendedFilesAfterEnvPath = path.join(
	rootPath,
	"jest.setup.js"
)
const transformerPath = path.join(
	__dirname,
	"../utils/transformer.js"
)

module.exports = {
	rootPath,
	srcPath,
	coverageDir,
	configPath,
	setupFilesAfterEnvPath,
	setupExtendedFilesAfterEnvPath,
	transformerPath,
}
