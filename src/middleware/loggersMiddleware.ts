import { Request, RequestEvent } from '@hapi/hapi'

export const loggersMiddleware = (
  _request: Request,
  event: RequestEvent,
  tags: { [key: string]: true }
) => {
  if (tags.error) {
    console.error(event)
  }

  if (tags.info) {
    console.info(event)
  }

  if (tags.warn) {
    console.warn(event)
  }
}
