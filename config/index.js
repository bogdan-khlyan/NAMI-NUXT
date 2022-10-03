const head = require('./head/head')
const build = require('./build/build')
const plugins = require('./plugins/plugins')
const router = require('./router/router')
const common = require('./common/common')

module.exports = {
  ...head,
  ...plugins,
  ...build,
  router,
  ...common
}
