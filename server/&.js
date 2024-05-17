import Koa from "koa"
import logger from "koa-logger"
import router from "@koa/router"

const routes = router()

const app = new Koa()

app.use(logger())

const helloWorld = (ctx) => {
  ctx.body = 'oi'
}

const site = routes.get("/", (ctx) => {
  ctx = helloWorld(ctx)
})

const api = routes.get("/api", (ctx) => {
  ctx.body = {
    "message": "hello"
  }
})


export default app.use(api.routes()).use(site.routes())