// The handler can directly return JSON data, a Promise, or use event.node.res.end() to send a response.
export default defineEventHandler((event) => {
  return {
    hello: 'world'
  }
})

