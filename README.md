[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# pagelinks 

Node.js module/CLI app for scraping links from a webpage

## Installation

```
$ npm install pagelinks
```

You can also install it globally to use the CLI version

```
$ npm install pagelinks -g
```

## Usage - module

Pass an object with the uri, file or data for the page you want to scrape.

```JavaScript
const pagelinks = require('pagelinks')
const options = {
  uri: 'http://www.google.com'
}

pagelinks(options, function(error, links) {
  if (error) {
    throw error
  }
  console.log(links)
})
```

or

```
const options = {
  file:'mypath/myfile.html'
}
```

or

```
const options = {
  data: <pagedata>
}
```

returns

```JavaScript
[
  {
    text: 'Søk',
    href: 'https://www.google.no/webhp?tab=ww',
    id: 'gb_1',
    class: 'gbzt gbz0l gbp1'
  },
  {
    text: 'Bilder',
    href: 'http://www.google.no/imghp?hl=no&tab=wi',
    id: 'gb_2',
    class: 'gbzt'
  },
  {
    text: 'Maps',
    href: 'http://maps.google.no/maps?hl=no&tab=wl',
    id: 'gb_8',
    class: 'gbzt'
  },
  {
    text: 'Play',
    href: 'https://play.google.com/?hl=no&tab=w8',
    id: 'gb_78',
    class: 'gbzt'
  },
  { text: 'Alt om Google', href: '/intl/no/about.html' },
  {
    text: 'Google.no',
    href: 'http://www.google.com/setprefdomain?prefdom=NO&prev=http://www.google.no/&sig=K_Yael_-8yUXfGhE8aXDXMo07ePOo%3D'
  }
]
```

Default the module will return text, 'href', 'id', 'target' and 'class' from the links.
For other attributes/properties supply an array of attributes.

```
const options = {
  uri:<uri>,
  attrs:['href', 'data-title', 'data-description']
}
```

## Usage - CLI

To use it as a CLI app install it globally.

To display help

```
$ pagelinks --help
```

To display version

```
$ pagelinks --version
```

Usage:

```
$ pagelinks <uri>
```

or

```
$ pagelinks --file=<file>
```

or

```
$ pagelinks --data=<data>
```

Default the module will return text, 'href', 'id', 'target' and 'class' from the links.
For other attributes/properties supply a comma separated string of attributes.

```
$ pagelinks <uri> --attrs='href,data-title,data-description'
```

## License

[MIT](LICENSE)