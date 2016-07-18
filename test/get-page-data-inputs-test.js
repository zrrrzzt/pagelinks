'use strict'

const tap = require('tap')
const getPageData = require('../lib/get-page-data')

tap.test('Should throw if uri or file or data is not specified', function (test) {
  const options = {
    uri: false,
    file: false,
    data: false
  }

  getPageData(options, (error, data) => {
    const expectedErrorMessage = 'Missing required param'
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})

tap.test('Should throw if uri is not valid', function (test) {
  const options = {
    uri: 'pysje'
  }

  getPageData(options, (error, data) => {
    const expectedErrorMessage = 'Invalid uri'
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.done()
  })
})
