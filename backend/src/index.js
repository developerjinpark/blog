require('dotenv').config()

const Koa = require('koa')
const Router = require('koa-router')
const bodyParser = require('koa-bodyparser')

const api = require('./api')
const mongoose = require('mongoose')
const session = require('koa-session')

const {
    PORT: port = 4000,
    MONGO_URI: mongoURI,
    COOKIE_SIGN_KEY: signKey
} = process.env

console.log('mongoURI', mongoURI);

mongoose.Promise = global.Promise
mongoose.connect(mongoURI).then(() => {
    console.log('connected to mongodb')
}).catch(e => {
    console.error(e)
})

const app = new Koa()
const router = new Router()

// apply api route
router.use('/api', api.routes())

app.use(bodyParser())

const sessionConfig = {
    maxAge: 86400000, // a day
}

app.use(session(sessionConfig, app))
app.keys = [signKey]

// apply router on app instance
app.use(router.routes())
    .use(router.allowedMethods())

app.listen(port, () => {
    console.log('listening to port ', port)
})