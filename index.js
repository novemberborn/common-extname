'use strict'

var extname = require('path').extname

module.exports = function commonExtname (paths) {
  // Object to hold suffix strings for formed of the (compound) extnames of each
  // path. The value for each suffix string is the number of times that suffix
  // occurred in the `paths` array
  var suffixes = Object.create(null)
  for (var i = 0; i < paths.length; i++) {
    var path = paths[i]

    var suffix = ''
    do {
      var str = extname(path.slice(0, path.length - suffix.length))
      if (str !== '') {
        suffix = str + suffix
        suffixes[suffix] = (suffixes[suffix] || 0) + 1
      }
    } while (str !== '')
  }

  // Find the suffixes that occurred for each path and sort them by length
  // (longest first).
  var common = Object.keys(suffixes).filter(function (suffix) {
    return suffixes[suffix] === paths.length
  }).sort(function (a, b) {
    return b.length - a.length
  })

  // Return the longest common (compound) extname, or the empty string.
  return common[0] || ''
}
