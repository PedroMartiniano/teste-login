import Fastify from 'fastify'
import cors from '@fastify/cors'
import serverRoutes from './routes'


const server = Fastify()

server.register(cors)
server.register(serverRoutes)

server.listen({
    port: 4444
})
.then( () => {
    console.log('HTTP Server running on port 4444')
})