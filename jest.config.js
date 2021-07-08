const path = require("path")

const cwdSrcPath = path.resolve(process.cwd(), "src")
const coverageDirectory = path.resolve(
	process.cwd(),
	"report/coverage"
)

module.exports = {
	bail: true,
	clearMocks: true,
	collectCoverage: true,
	collectCoverageFrom: [
		`src/**/*.[jt]s?(x)`,
		`!src/**/?(*.)+(spec|test).[jt]s?(x)`,
		"!**/node_modules/**",
		"!**/vendor/**",
	],
	coverageReporters: [["html", { subdir: "html" }]],
	coverageDirectory,
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"__mocks__/file.js",
		"\\.([sc]?(a)ss|less)$": "identity-obj-proxy",
	},
	modulePaths: ["node_modules", cwdSrcPath],
	reporters: ["default"],
	rootDir: ".",
	roots: [cwdSrcPath],
	setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
	testEnvironment: "node",
	timers: "fake",
	transform: { "\\.[jt]sx?$": "./utils/transformer.js" },
	watchPathIgnorePatterns: [`!${cwdSrcPath}`],
}
