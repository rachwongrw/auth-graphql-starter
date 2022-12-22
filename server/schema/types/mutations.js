const { GraphQLObjectType, GraphQLString } = require("graphql");

const UserType = require("./user_type");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    signup: {
      type: UserType,
      args: {
        email: { type: GraphQLString },
        password: { type: GraphQLString },
      },
      resolve(parentValue, args, request) {
        // request is the request obj from express.
      },
    },
  },
});

module.exports = mutation;
