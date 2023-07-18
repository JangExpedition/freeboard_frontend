import { useRouter } from "next/router";
import BoardNew from "../../../../src/components/units/board/new/BoardNew.container";
import { useQuery, gql } from "@apollo/client";

const FETCH_BOARD = gql`
    query fetchBoard($boardId: ID!){
        fetchBoard(boardId: $boardId){
            _id
            writer
            title
            contents
            createdAt
        }
    }
`
export default function BoardsEditPage(){

    const router = useRouter();

    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId
        }
    });

    return(
        <BoardNew 
            isEdit={true}
            data={data}/>
    )
}