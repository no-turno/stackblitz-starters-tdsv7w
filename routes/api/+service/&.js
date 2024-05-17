export const route = {}
export const history = new Set()
export const toString = () =>
  JSON.stringify({
    route,
    history: Array.from(history),
  })

export default function ({middleware} = {middleware: }) {
   {
    route,
    history,
    toString,
  }
}
