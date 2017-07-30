const fs = require('fs')
const nunjucks = require('nunjucks')

const showTpl = fs.readFileSync('./show.tpl').toString()
const show = nunjucks.renderString(showTpl)

// fs.writeFileSync('./index.js', show)

const getTpl = fs.readFileSync('./get.tpl').toString()
const get = nunjucks.renderString(getTpl)
const combine = show + get

fs.writeFileSync('./index.js', combine)
