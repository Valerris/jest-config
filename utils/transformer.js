const babelJest = require("babel-jest").default
const babelConfig = require("@valerris/webpack-config/.babelrc")

module.exports = babelJest.createTransformer(babelConfig)
