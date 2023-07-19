import { IQuery } from "../../../../commons/types/generated/types"
import { MouseEvent } from "react";

export interface BoardViewUIProps{
    onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void
    onClickMoveBoardUpdate: () => void
    onClickMoveBoards: () => void
    data?: Pick<IQuery, "fetchBoard">
}