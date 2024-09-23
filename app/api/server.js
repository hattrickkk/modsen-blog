import jsonServer from 'json-server'

const server = jsonServer.create()
const appRouter = jsonServer.router('./db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(appRouter)

export default server
