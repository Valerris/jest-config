const {
	rootPath,
	srcPath,
	coverageDir,
	setupFilesAfterEnvPath,
	setupExtendedFilesAfterEnvPath,
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
	injectGlobals: true,
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"__mocks__/file.js",
		"\\.(s?[ac]ss|less)$": "identity-obj-proxy",
	},
	modulePaths: ["node_modules", srcPath],
	reporters: ["default"],
	rootDir: rootPath,
	roots: [rootPath],
	setupFilesAfterEnv: [
		setupFilesAfterEnvPath,
		setupExtendedFilesAfterEnvPath,
	],
	testEnvironment: "jsdom",
	timers: "fake",
	transform: { "\\.[jt]sx?$": transformerPath },
	transformIgnorePatterns: [
		"node_modules/(?!(@valerris/jest-config)/)",
	],
	watchPathIgnorePatterns: [`!${srcPath}`],
}
