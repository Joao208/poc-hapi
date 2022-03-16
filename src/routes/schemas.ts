import Joi from 'joi'

export const getAnimalRouteSchema = {
  tags: ['api'],
  notes: 'Returns the animals by id',
  description: 'Get all animals',
  response: {},
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
  response: {},
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
