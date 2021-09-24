import { gql } from "apollo-server";

export default gql`
/* 무언가를 불러오는 게 아닌 Mutation 명령어의 경우, null를 쓰기 보단 직접 type를 선언하여 쓰는 게 많다.*/
    type EditPhotoResult {
        ok: Boolean!
        error: String
    }

    type Mutation {
        editPhoto(id: Int!, caption: String!): MutationResponse!
    }
`;