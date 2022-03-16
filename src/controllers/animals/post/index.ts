import { Request } from '@hapi/hapi'
import prisma from '../../../config/prisma'

export const postController = async (request: Request) => {
  const { animalLink } = request.payload as { animalLink: string }

  request.log('info', `Creating animal for link ${animalLink}`)

  const animal = await prisma.animals.create({ data: { animalLink } })

  return animal
}
