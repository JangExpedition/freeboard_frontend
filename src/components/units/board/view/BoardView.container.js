import BoardViewUI from "./BoardView.presenter"
import { useRouter } from "next/router"
import { useMutation, useQuery } from "@apollo/client"
import { FETCH_BOARD, DELETE_BOARD } from "./BoardView.queries";

export default function BoardView(){

    const router = useRouter();
    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId
        }
    }) 
    const [deleteBoard] = useMutation(DELETE_BOARD);
    const onClickDelete = (event) => {
        deleteBoard({
            variables: {
                boardId: event.target.id
            }
        })
    }

    const onClickMoveBoardUpdate = () => {
        router.push(`${router.query.boardId}/edit`)
    }

    const onClickMoveBoards = () => {
        router.push("../boards")
    }
    
    return(
        <BoardViewUI 
            onClickDelete={onClickDelete}
            onClickMoveBoardUpdate={onClickMoveBoardUpdate}
            onClickMoveBoards={onClickMoveBoards}
            data={data}
        />
    )
}