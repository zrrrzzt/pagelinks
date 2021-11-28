'use strict'

const cheerio = require('cheerio')

/**
 *parseDataForLinks
 *
 * @desc parses data for links and returns array with objects
 *
 * @param {object} options - Options object
 * @param {string} options.data - Data to parse
 * @param {array} options.attrs - attributes to get values from
 * @param {callback} callback - Callback for handling the response
 * @returns {*}
 */
module.exports = (options, callback) => {
  const attrs = options.attrs || ['href', 'id', 'target', 'class']
  const links = []

  if (!options) {
    return callback(new Error('Missing required input: options'), null)
  }

  if (!options.data) {
    return callback(new Error('Missing required input: options.data'), null)
  }

  const $ = cheerio.load(options.data)

  $('a').each((index, element) => {
    const e = $(element)
    const props = {}

    props.text = e.text()

    attrs.forEach(el => {
      if (e.attr(el)) {
        props[el] = e.attr(el)
      }
    })

    links.push(props)
  })

  return callback(null, links)
}
