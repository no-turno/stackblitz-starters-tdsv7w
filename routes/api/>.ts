import { pathToFileURL } from "url"

declare const self: Worker & {
  src: URL
}

self.src = pathToFileURL(process.cwd() + "/>.ts")

self.on("connection", () => {
  console.log("connected")
})

self.on("error", (ctx) => {
  console.log(ctx.message)
})
