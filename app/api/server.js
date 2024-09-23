import jsonServer from 'json-server'

const server = jsonServer.create()
const appRouter = jsonServer.router(require.resolve('./db.json'))
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(appRouter)

server.get('/api/posts', (req, res) => {
    const posts = router.db.get('posts').value() // Получаем посты из базы
    console.log(posts)
    res.json(posts) // Возвращаем посты
})

export default (req, res) => {
    server(req, res)
}
