import {gql} from "ApolloServer";

export default gql`
    type Mutation {
        createAccount(
            firstName: String!
            lastName: String!
            email: String!
            password: String!
        ): MutationResponse!
    }
`;