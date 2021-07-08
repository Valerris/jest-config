const babelJest = require("babel-jest").default
const babelConfig = require("@valerris/webpack-config/.babelrc.js")

module.exports = babelJest.createTransformer(babelConfig)
