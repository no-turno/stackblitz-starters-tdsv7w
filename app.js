import Koa from "koa"
import logger from "koa-logger"
import router from "@koa/router"

const app = new Koa()

app.use(logger())

const helloWorld = (ctx) => {
  ctx = Object.assign(ctx, {
    body: "hello",
  })
}

const site = router().get("/_", (ctx) => {
  ctx.body = helloWorld(ctx)
})

const api = router().get("/api", (ctx) => {
  helloWorld(ctx)
})

app.use(api.routes())
app.use(site.routes())

app.listen(3000)
