import { Request } from '@hapi/hapi'
import prisma from '../../../config/prisma'

export const deleteController = (request: Request) => {
  const { id } = request.params

  request.log('info', `Delete animal of id ${id}`)

  return prisma.animals.delete({
    where: { id },
  })
}
