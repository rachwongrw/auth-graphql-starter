const { default: gql } = require("graphql-tag");

export default gql`
  {
    user {
      id
      email
    }
  }
`;
