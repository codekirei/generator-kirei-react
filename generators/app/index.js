'use strict'

const gen = require('yeoman-generator')

module.exports = gen.Base.extend({
  prompting: function() {
    const done = this.async()
    this.prompt(
      {
        type: 'input'
      , name: 'name'
      , message: 'What is your project name?'
      , default: this.appname
      }
    , answers => {
      this.log(answers.name)
      done()
    })
  }
})
