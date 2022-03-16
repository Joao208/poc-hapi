import Boom from '@hapi/boom'
import { Request, ResponseToolkit } from '@hapi/hapi'

export const authMiddleware = function (
  request: Request,
  reply: ResponseToolkit
) {
  if (process.env.AUTH !== request.headers.authorization) {
    throw Boom.unauthorized(null, 'Basic', 'Invalid token')
  }

  return reply.continue
}
