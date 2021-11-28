'use strict'

const tap = require('tap')
const downloadPage = require('../lib/download-page')

tap.test('Requires url', function (test) {
  const url = false
  const expectedErrorMessage = 'Missing required input: url'
  downloadPage(url, (error, data) => {
    tap.equal(error.message, expectedErrorMessage, expectedErrorMessage)
    test.end()
  })
})

tap.test('Returns error as expected', function (test) {
  const url = 'http://detteerenurlsomsannsynligviseikkefinnes.no'
  downloadPage(url, (error, data) => {
    tap.ok(error, 'Got error, indeed')
    test.end()
  })
})

tap.test('Returns expected status code for https', function (test) {
  const url = 'https://www.google.com'
  downloadPage(url, (error, data) => {
    if (error) {
      throw error
    }
    tap.ok(data, 'Got data from https')
    test.end()
  })
})

tap.test('Returns expected status code for http', function (test) {
  const url = 'http://www.google.com'
  downloadPage(url, (error, data) => {
    if (error) {
      throw error
    }
    tap.ok(data, 'Got data from http')
    test.end()
  })
})
