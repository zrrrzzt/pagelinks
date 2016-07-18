'use strict'

const fs = require('fs')
const validUrl = require('valid-url')
const downloadPage = require('./download-page')

module.exports = (options, callback) => {
  if (!options.uri && !options.file && !options.data) {
    return callback(new Error('Missing required param'), null)
  }

  if (options.uri && !validUrl.isWebUri(options.uri)) {
    return callback(new Error('Invalid uri'), null)
  }

  if (options.uri) {
    downloadPage(options.uri, (error, body) => {
      if (error) {
        return callback(error, null)
      } else {
        return callback(null, body)
      }
    })
  }

  if (options.file) {
    fs.readFile(options.file, (error, data) => {
      if (error) {
        return callback(error, null)
      } else {
        return callback(null, data.toString())
      }
    })
  }

  if (options.data) {
    return callback(null, options.data)
  }
}
