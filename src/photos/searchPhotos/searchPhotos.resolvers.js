import client from "../../client";

export default {
    /* searchPhotos(keyword: "i love"){
        id
        file
    } 이렇게 쿼리문을 작성해주면 사진 업로드 할 때 clint DB의 photo,user 중에서 Photo모델로 가서 "i love"라는 키워드로 시작하는 캡션(게시글)
    을 찾고 그 photos 중 photo 모델의 id 와 file를 리턴해준다.

  Query: {
    searchPhotos: (_, { keyword }) =>
      client.photo.findMany({
        where: {
          caption: {
            startsWith: keyword,
          },
        },
      }),
  },
};