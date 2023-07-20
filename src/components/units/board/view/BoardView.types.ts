import type { IQuery } from "../../../../commons/types/generated/types";
import type { MouseEvent } from "react";

export interface BoardViewUIProps {
  onClickDelete: (event: MouseEvent<HTMLButtonElement>) => void;
  onClickMoveBoardUpdate: () => void;
  onClickMoveBoards: () => void;
  data?: Pick<IQuery, "fetchBoard">;
}
