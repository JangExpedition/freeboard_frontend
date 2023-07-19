import { ChangeEvent } from "react";

export interface createBoardCommentWriteUIProps{
    onChangeWriter: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
    onClickWrite: () => void;
    contents: string
}