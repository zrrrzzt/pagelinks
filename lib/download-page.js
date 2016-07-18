'use strict'

module.exports = (url, callback) => {
  if (!url) {
    return callback(new Error('Missing required input: url'), null)
  }

  const protocol = /https/.test(url) ? 'https' : 'http'
  const http = require(protocol)

  http.get(url, response => {
    let body = ''

    response.on('data', (chunk) => {
      body += chunk
    })

    response.on('end', () => {
      return callback(null, body.toString())
    })
  }).on('error', error => {
    return callback(error)
  })
}
