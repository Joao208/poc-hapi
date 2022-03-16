import 'dotenv/config'
import Hapi from '@hapi/hapi'
import Inert from '@hapi/inert'
import Vision from '@hapi/vision'
import HapiSwagger from 'hapi-swagger'
import routes from './routes'
import * as middleware from './middleware'

async function start() {
  const server = Hapi.server({
    port: 3000,
    routes: { log: { collect: true } },
  })

  const swaggerOptions: HapiSwagger.RegisterOptions = {
    info: {
      title: '[POC] HAPI Framework',
    },
  }

  const plugins: Array<Hapi.ServerRegisterPluginObject<any>> = [
    {
      plugin: Inert,
    },
    {
      plugin: Vision,
    },
    {
      plugin: HapiSwagger,
      options: swaggerOptions,
    },
  ]

  await server.register(plugins)

  server.events.on(
    { name: 'request', channels: 'app' },
    middleware.loggersMiddleware
  )

  server.route(routes)

  await server.start()

  console.log('Server running on %s', server.info.uri)
}

start()
