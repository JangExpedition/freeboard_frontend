import { IQuery } from "../../../../commons/types/generated/types"
import { MouseEvent } from 'react';

export interface IBoardUIProps{
    data?: Pick<IQuery, "fetchBoards">
    onClickMoveToBoardNew: () => void
    onClickMoveToBoardDetail: (event: MouseEvent<HTMLDivElement>) => void
}