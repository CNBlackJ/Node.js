const Router = reqiure('koa-router')

const book = require('./routes/books')

const router = new Router()

router.use('/books', book.routes(), book.allowedMethods())

module.exports = router