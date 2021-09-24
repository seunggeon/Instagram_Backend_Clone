export default gql`
    type Query {
        /* hashTag가 아닌 keyword로 검색이 가능하게 하기.
            안그러면 seePhoto와 별반 다를게 없음.
         */
        searchPhotos(keyword: String!):   [Photo]
    }`
    ;