import { prisma } from "./lib/prisma";
import { z } from "zod";
import { FastifyInstance } from "fastify";

export default async function serverRoutes(server: FastifyInstance) {
    server.post('/user', async (request) => {
        const createUser = z.object({
            email: z.string(),
            nome: z.string(),
            senha: z.string()
        })

        const { email, nome, senha } = createUser.parse(request.body)

        const newUser = await prisma.usuario.create({
            data: {
                email,
                nome,
                senha
            }
        })

        return newUser
    })

    server.get('/users', async () => {
        const users = await prisma.usuario.findMany()
        return users
    })
}