import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import BoardListUI from "./BoardList.presenter";
import {FETCH_BOARDS} from "./BoardList.queries"

export default function BoardList(){

    const router = useRouter();
    const{data} = useQuery(FETCH_BOARDS);

    const onClickMoveToBoardNew = () => {
        router.push("/boards/new")
    };

    const onClickMoveToBoardDetail = (event) => {
        router.push(`/boards/${event.target.id}`)
    };

    return(
        <BoardListUI 
            data={data}
            onClickMoveToBoardNew={onClickMoveToBoardNew}
            onClickMoveToBoardDetail={onClickMoveToBoardDetail}/>
    )
}