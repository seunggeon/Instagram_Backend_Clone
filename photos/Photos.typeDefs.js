export default gql`
    type Photo {
        id: Int!
        user: User!
        file: String!
        caption: String!
        hashtag: [hashtag]
        createdAt: String!
        updatedAt: String!
    }
    type Hashtag {
        id: Int!
        hashTag: String!
        photos: [Photo]
        createdAt: String!
        updatedAt: String!
    }`;