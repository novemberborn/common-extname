import test from 'ava'

import commonExtname from './'

test('returns an empty string if there is no common extname', (t) => {
  t.is(commonExtname(['foo.bar', 'baz.qux']), '')
})

test('returns the longest common extname', (t) => {
  t.is(commonExtname(['foo.bar.baz', 'qux.quux.baz']), '.baz')
  t.is(commonExtname(['foo.bar.baz', 'qux.bar.baz']), '.bar.baz')
})

test('does not care about the file separator', (t) => {
  t.is(commonExtname(['foo/bar.baz', 'qux\\bar.baz']), '.baz')
})

test('works fine with surrogate pairs', (t) => {
  t.is(commonExtname(['foo.bar.💩', 'qux.bar.💩']), '.bar.💩')
})
