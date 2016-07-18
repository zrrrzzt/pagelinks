#!/usr/bin/env node
'use strict'

const pagelinks = require('./index')
const pkg = require('./package.json')
const query = process.argv[2]
const argv = require('minimist')((process.argv.slice(2)))
var options = {
  uri: false,
  file: false,
  data: false,
  attrs: false
}

const printHelp = () => {
  console.log(pkg.description)
  console.log('')
  console.log('Usage:')
  console.log('  $ pagelinks <uri>')
  console.log('')
  console.log('or:')
  console.log('  $ pagelinks --file=<file>')
  console.log('')
  console.log('or:')
  console.log('  $ pagelinks --data=<data>')
  console.log('')
  console.log('Default the module will return text, href, id, target and class from the links.')
  console.log('For other attributes/properties supply a comma separated string of attributes.')
  console.log('  $ pagelinks <uri> --attrs="href,data-title,data-description"')
}

if (!query || process.argv.indexOf('-h') !== -1 || process.argv.indexOf('--help') !== -1) {
  printHelp()
  process.exit(0)
}

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
  console.log(pkg.version)
  process.exit(0)
}

if (query.indexOf('http') !== -1) {
  options.uri = argv._[0]
}

if (argv.file) {
  options.file = argv.file
}

if (argv.data) {
  options.data = argv.data
}

if (argv.attrs) {
  options.attrs = argv.attrs.split(',')
}

pagelinks(options, (err, links) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(JSON.stringify(links))
  process.exit(0)
})
