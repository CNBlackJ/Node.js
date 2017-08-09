const Koa = require('koa')
const Router = require('koa-router')

const Book = require('./db')

const app = new Koa()
const router = new Router()

router.get('/books', async(ctx, next) => {
	const books = await Book.find()
	console.log(books)
	ctx.body = books
})

app.use(router.routes())

app.listen(3000)