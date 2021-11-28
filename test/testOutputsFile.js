'use strict'

const tap = require('tap')
const pagelinks = require('../index')

tap.test('Should return 3 links', function (test) {
  const opts = {
    file: 'test/testpage.html'
  }

  pagelinks(opts, (err, links) => {
    if (err) {
      throw err
    }

    tap.equal(links.length, 3, '3 links it is')

    test.end()
  })
})

tap.test('3 links contains expected href', function (test) {
  const opts = {
    file: 'test/testpage.html'
  }

  pagelinks(opts, (err, links) => {
    if (err) {
      throw err
    }

    tap.equal(links[0].href, 'https://github.com/zrrrzzt', 'Link 1 OK')

    tap.equal(links[1].href, '127.0.0.1', 'Link 2 OK')

    tap.equal(links[2].href, 'https://www.npmjs.org', 'Link 3 OK')

    test.end()
  })
})

tap.test('Should return data-gingerbread', function (test) {
  const opts = {
    file: 'test/testpage.html',
    attrs: ['data-gingerbread']
  }

  pagelinks(opts, (err, links) => {
    if (err) {
      throw err
    }

    tap.equal(links[0]['data-gingerbread'], 'bevare of fakes', 'Gingerbread OK')

    test.end()
  })
})
