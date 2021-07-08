const jest = require("jest")

module.exports = function jestRun(program) {
	process.env.NODE_ENV = "test"

	const cliOptionsMap = program.opts()

	const opts = ["--ci", "--coverage"]

	cliOptionsMap.update && opts.push("--updateSnapshot")
	cliOptionsMap.watch && opts.push("--watch")
	cliOptionsMap.watchAll && opts.push("--watchAll")

	opts.push(...program.args)

	try {
		jest.run(opts)
	} catch (e) {
		console.error("\nError runnig Jest!\n")
	}
}
