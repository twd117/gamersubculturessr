
const { buildSchema, graphql } = require('graphql')

const schema = buildSchema(`
  type Hello {
    answer: String!
    otherAnswer: String!
  }
  type Query {
    hello (msg: String!): Hello!
  }
`)

// The root provides a resolver function for each API endpoint
const root = {
  hello: ({ msg }) => ({
    answer: `Graphql Server: Hello world! ${msg}`,
    otherAnswer: `Graphql Server: Something else! ${msg}`,
  }),
}

module.exports = [
  {
    route: '/api/getProps',
    method: 'get',
    handler(req, res) {
     // const url = new URL('http://e.c' + req.originalUrl)
      console.log('getProps', req.data )
     // const routeName = url.searchParams.get('title') || ''
      res.end(
        JSON.stringify({
         // name: routeName,
          server: true,
       //   msg: 'This is page ' + routeName.toUpperCase(),
        })
      )
    },
  },
  {
    route: '/graphql',
    method: 'post',
    async handler(req, res) {
      const data = await graphql(
        schema,
        req.body.query,
        root,
        req.body.operationName,
        req.body.variables
      )

      res.setHeader('Cache-Control', 'max-age=0')
      res.end(JSON.stringify(data))
    },
  },
]