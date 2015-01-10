#pagelinks [![Build Status](https://travis-ci.org/zrrrzzt/pagelinks.svg?branch=master)](https://travis-ci.org/zrrrzzt/pagelinks)

Node.js module/CLI app for scraping links from a webpage

##Installation

```
$ npm install pagelinks
```

You can also install it globally to use the CLI version

```
$ npm install pagelinks -g
```

##Usage - module

Pass an object with the uri, file or data for the page you want to scrape.

```javascript
var pagelinks = require('pagelinks');
var opts = {
  uri: 'http://www.google.com'
};

pagelinks(opts, function(err, links){
  if (err) {
    throw err;
  }
  console.log(links);
});
```

or

```
var opts = {
  file:'mypath/myfile.html'
};
```

or

```
var opts = {
  data: <pagedata>
};
```

Default the module will return text, 'href', 'id', 'target' and 'class' from the links.
For other attributes/properties supply an array of attributes.

```
var opts = {
  uri:<uri>,
  attrs:['href', 'data-title', 'data-description']
};
```


##Usage - CLI

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