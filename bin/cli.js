#!/usr/bin/env node

const program = require("commander")
const { version } = require("../package")
const jestRun = require("./jestRun")

program
	.version(version)
	.allowUnknownOption()
	.usage("[options]")
	.option("-u, --update", "re-record every snapshot that fails")
	.option(
		"-w, --watch",
		"watch and rerun tests related to changed files"
	)
	.option("-wAll, --watchAll", "watch and rerun all tests")
	.parse(process.argv)

jestRun(program)
