# common-extname

Computes the longest (compound) extension that is common to each path. Tested
with Node.js 0.10 and above.

## Installation

```
npm install --save common-extname
```

## Usage

The module has one default export, the `commonExtname` function:

```js
var commonExtname = require('common-extname')
```

Call `commonExtname()` with an array of paths (strings):

```js
var paths = ['main.html.handlebars', '_partial.html.handlebars']

commonExtname(paths) // returns '.html.handlebars'
```

An empty string is returned if no common extname exists:

```js
commonExtname(['index.js', 'package.json']) // returns ''
```
