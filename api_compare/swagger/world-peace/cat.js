const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const Joi = require('joi')

const server = new Hapi.Server();
server.connection({
        host: 'localhost',
        port: 3000
    });

const options = {
    info: {
            'title': 'Test API Documentation',
            'version': '0.0.1',
        }
    };

server.register([
    Inert,
    Vision,
    {
        'register': HapiSwagger,
        'options': options
    }], (err) => {
        server.start( (err) => {
           if (err) {
                console.log(err);
            } else {
                console.log('Server running at:', server.info.uri);
            }
        });
    });

server.route([{
      method: 'GET',
      path: '/cat/{id}',
      config: {
        handler: (request, reply) => { reply('I am a cat.') },
        description: 'Get Cat',
        notes: 'Using id to get cat',
        tags: ['api'],
        validate: {
          params: {
            id: Joi.number().required(),
          }
        },
        state: {
          parse: false,
          failAction: 'ignore',
        },
      },
}])
