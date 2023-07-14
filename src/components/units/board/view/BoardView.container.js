import BoardViewUI from "./BoardView.presenter"
import { useRouter } from "next/router"
import { useQuery } from "@apollo/client"
import { FETCH_BOARD } from "./BoardView.queries";

export default function BoardView(){

    const router = useRouter();
    const {data} = useQuery(FETCH_BOARD, {
        variables: {
            boardId: router.query.boardId
        }
    }) 

    console.log(data);

    return(
        <BoardViewUI data={data}/>
    )
}