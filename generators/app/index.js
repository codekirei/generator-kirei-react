'use strict'

const gen = require('yeoman-generator')

module.exports = gen.Base.extend({
  foo: function() {
    console.log('foo')
  }
  bar: function() {
    console.log('bar')
  }
})
