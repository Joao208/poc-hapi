import { ServerRoute } from '@hapi/hapi'
import * as userController from '../controllers/animals'
import * as middleware from '../middleware'
import {
  deleteAnimalSchema,
  getAnimalRouteSchema,
  postAnimalSchema,
} from './schemas'

const routes = [] as ServerRoute[]

routes.push({
  method: 'GET',
  path: '/',
  handler: userController.getController,
  options: {
    pre: [{ method: middleware.authMiddleware }],
    ...getAnimalRouteSchema,
  },
})

routes.push({
  method: 'POST',
  path: '/',
  handler: userController.postController,
  options: {
    pre: [{ method: middleware.authMiddleware }],
    ...postAnimalSchema,
  },
})

routes.push({
  method: 'DELETE',
  path: '/{id}',
  handler: userController.deleteController,
  options: {
    pre: [{ method: middleware.authMiddleware }],
    ...deleteAnimalSchema,
  },
})

export default routes
