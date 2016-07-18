'use strict'

const tap = require('tap')
const parseDataForLinks = require('../lib/parse-data-for-links')

tap.test('Requires an options object', function (test) {
  const options = false

  parseDataForLinks(options, (error, data) => {
    const expectedErrorMessage = 'Missing required input: options'
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Requires options.data to exist', function (test) {
  const options = {
    data: false
  }

  parseDataForLinks(options, (error, data) => {
    const expectedErrorMessage = 'Missing required input: options.data'
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
