import { gql } from "@apollo/client";

export const CREATE_BOARD = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!){

    createBoard(createBoardInput: $createBoardInput){
        _id
        writer
        title
        contents
        youtubeUrl
        likeCount
        dislikeCount
        images
        boardAddress {zipcode, address, addressDetail}
        user { _id }
        createdAt
        updatedAt
        deletedAt
    }
  }
`

export const UPDATE_BOARD = gql`
  mutation updateBoard($updateBoardInput: UpdateBoardInput!, $password: String, $boardId: ID!){

    updateBoard(updateBoardInput: $updateBoardInput, password: $password, boardId: $boardId){
        _id
        writer
        title
        contents
        youtubeUrl
        likeCount
        dislikeCount
        images
        boardAddress {zipcode, address, addressDetail}
        user { _id }
        createdAt
        updatedAt
        deletedAt
    }
  }
`