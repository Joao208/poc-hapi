import Joi from 'joi'

const animalSchema = Joi.object({
  id: Joi.number(),
  animalLink: Joi.string(),
  createdAt: Joi.string(),
  updatedAt: Joi.string(),
  metadata: Joi.string(),
}).label('Animal')

export const getAnimalRouteSchema = {
  tags: ['api'],
  notes: 'Returns the animals by id',
  description: 'Get all animals',
  response: {
    schema: animalSchema,
  },
  validate: {
    query: Joi.object({
      id: Joi.number().description('The id for the animal'),
    }),
  },
}

export const postAnimalSchema = {
  tags: ['api'],
  notes: 'Create new animal by data',
  description: 'Create new animal',
  response: {
    schema: animalSchema,
  },
  validate: {
    payload: Joi.object({
      animalLink: Joi.string().required().description('Link of the animal'),
    }),
  },
}

export const deleteAnimalSchema = {
  tags: ['api'],
  notes: 'Delete animal by id',
  description: 'Delete animal',
  response: {},
  validate: {
    params: Joi.object({
      id: Joi.number().required().description('The id for the animal'),
    }),
  },
}
