import { Request } from '@hapi/hapi'
import prisma from '../../../config/prisma'

export const getController = async (request: Request) => {
  const { id } = request.query

  request.log('info', `Getting animal of id ${id}`)

  const animals = await prisma.animals.findFirst({
    ...(id && { where: { id: parseFloat(id) } }),
  })

  return animals
}
