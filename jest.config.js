const {
	srcPath,
	coverageDir,
	setupFilesAfterEnvPath,
	transformerPath,
} = require("./utils/paths")

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
	coverageDirectory: coverageDir,
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"__mocks__/file.js",
		"\\.([sc]?(a)ss|less)$": "identity-obj-proxy",
	},
	modulePaths: ["node_modules", srcPath],
	reporters: ["default"],
	rootDir: ".",
	roots: [srcPath],
	setupFilesAfterEnv: [setupFilesAfterEnvPath],
	testEnvironment: "node",
	timers: "fake",
	transform: { "\\.[jt]sx?$": transformerPath },
	watchPathIgnorePatterns: [`!${srcPath}`],
}
