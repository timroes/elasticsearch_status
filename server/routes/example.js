export default function (server) {

  server.route({
    path: '/api/elasticsearch_status/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

};
