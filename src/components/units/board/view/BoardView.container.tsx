import BoardViewUI from "./BoardView.presenter";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_BOARD, DELETE_BOARD } from "./BoardView.queries";
import type { MouseEvent } from "react";
import type {
  IMutation,
  IMutationDeleteBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

export default function BoardView(): JSX.Element {
  const router = useRouter();

  if (!router || typeof router.query.boardId !== "string") {
    return <></>;
  }

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    {
      variables: {
        boardId: router.query.boardId,
      },
    }
  );

  const [deleteBoard] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD, {
    variables: {
      boardId: router.query.boardId,
    },
  });

  const onClickDelete = (event: MouseEvent<HTMLButtonElement>): void => {
    if (event.target instanceof HTMLButtonElement) {
      deleteBoard({
        variables: {
          boardId: event.target.id,
        },
      });
    }
  };

  const onClickMoveBoardUpdate = (): void => {
    router.push(`${router.query.boardId}/edit`);
  };

  const onClickMoveBoards = (): void => {
    router.push("../boards");
  };

  return (
    <BoardViewUI
      onClickDelete={onClickDelete}
      onClickMoveBoardUpdate={onClickMoveBoardUpdate}
      onClickMoveBoards={onClickMoveBoards}
      data={data}
    />
  );
}
