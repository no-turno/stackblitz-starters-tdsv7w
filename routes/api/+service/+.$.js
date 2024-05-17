/**
 * @param {Request} request
 */
export function handler(request) {
  return {
    get url() {
      return new URL(request.url)
    },
    get origin() {
      return this.url.origin
    },
    get params() {
      return Object.fromEntries(this.url.searchParams)
    },
  }
}
