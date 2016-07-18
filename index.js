'use strict'

const getPageData = require('./lib/get-page-data')
const parseDataForLinks = require('./lib/parse-data-for-links')

const parseAndReturn = (options, callback) => {
  parseDataForLinks(options, (error, links) => {
    if (error) {
      return callback(error, null)
    } else {
      return callback(null, links)
    }
  })
}

module.exports = (options, callback) => {
  getPageData(options, (error, data) => {
    if (error) {
      return callback(error, null)
    } else {
      const newOptions = {
        attrs: options.attrs,
        data: data
      }
      parseAndReturn(newOptions, callback)
    }
  })
}
