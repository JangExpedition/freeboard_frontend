import BoardNewUI from "./BoardNew.presenter"
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardNew.queries"
import { useState, ChangeEvent } from "react";
import { IMutation, IMutationCreateBoardArgs, IMutationUpdateBoardArgs, IUpdateBoardInput } from "../../../../commons/types/generated/types";
import { IBoardNewProps } from "./BoardNew.types";

export default function BoardNew(props: IBoardNewProps){
    const router = useRouter();

    const [isActive, setIsActive] = useState(false);

    const [writer, setWriter] = useState("");
    const [password, setPassword] = useState("");
    const [title, setTitle] = useState("");
    const [contents, setContents] = useState("");

    const[writerError, setWriterError] = useState("");
    const[passwordError, setPasswordError] = useState("");
    const[titleError, setTitleError] = useState("");
    const[contentsError, setContentsError] = useState("");

    const [createBoard] = useMutation<Pick<IMutation, "createBoard">, IMutationCreateBoardArgs>(CREATE_BOARD);
    const [updateBoard] = useMutation<Pick<IMutation, "updateBoard">, IMutationUpdateBoardArgs>(UPDATE_BOARD);

    function onChangeWriter(event: ChangeEvent<HTMLInputElement>){
        setWriter(event.target.value);
        if(event.target.value !== ""){
          setWriterError("")
        }

        if(event.target.value && password && title && contents){
          setIsActive(true);
        }else{
          setIsActive(false)
        }
    };

    function onChangePassword(event: ChangeEvent<HTMLInputElement>){
        setPassword(event.target.value);
        if(event.target.value !== ""){
          setPasswordError("")
        }

        if(writer && event.target.value && title && contents){
          setIsActive(true);
        }else{
          setIsActive(false)
        }
    };

    function onChangeTitle(event: ChangeEvent<HTMLInputElement>){
        setTitle(event.target.value);
        if(event.target.value !== ""){
          setTitleError("")
        }

        if(writer && password && event.target.value && contents){
          setIsActive(true);
        }else{
          setIsActive(false)
        }
    };

    function onChangeContents(event: ChangeEvent<HTMLTextAreaElement>){
        setContents(event.target.value);
        if(event.target.value !== ""){
          setContentsError("")
        }

        if(writer && password && title && event.target.value){
          setIsActive(true);
        }else{
          setIsActive(false)
        }
    };

    const onClickSubmit = async() => {
        if (!writer) {
            setWriterError("작성자를 입력해주세요.");
          }
          if (!password) {
            setPasswordError("비밀번호를 입력해주세요.");
          }
          if (!title) {
            setTitleError("제목을 입력해주세요.");
          }
          if (!contents) {
            setContentsError("내용을 입력해주세요.");
          }
          if (writer && password && title && contents) {
            try{
                const result = await createBoard({
                    variables: {
                        createBoardInput: {
                            writer: writer,
                            password: password,
                            title: title,
                            contents: contents
                        }
                    }
                })
    
                console.log(result);
                alert("게시글이 등록되었습니다.");
                router.push(`/boards/${result.data?.createBoard._id}`)
            } catch(error){
              if(error instanceof Error){
                alert(error.message);
              }
            }
          }
    };

    const onClickUpdate = async () => {
      if(!title && !contents){
        alert("수정한 내용이 없습니다.");
        return;
      }

      if(!password){
        alert("비밀번호를 입력해주세요.")
        return;
      }

      const updateBoardInput: IUpdateBoardInput = {};
      if(title){
        updateBoardInput.title = title;
      }
      if(contents){
        updateBoardInput.contents = contents;
      }

      try {
        if(typeof router.query.boardId !== "string") {
          alert("시스템에 문제가 있습니다.")
          return;
        }
        const result = await updateBoard({
          variables: {
            boardId: router.query.boardId,
            password,
            updateBoardInput
          },
        })
        router.push(`/boards/${result.data?.updateBoard._id}`)
      } catch(error) {
        if(error instanceof Error){
          alert(error.message)
        }
      }
    };

    return(
        <BoardNewUI 
            writerError={writerError}
            passwordError={passwordError}
            titleError={titleError}
            contentsError={contentsError}
            onChangeWriter={onChangeWriter}
            onChangePassword={onChangePassword}
            onChangeTitle={onChangeTitle}
            onChangeContents={onChangeContents}
            onClickSubmit={onClickSubmit}
            onClickUpdate={onClickUpdate}
            isActive={isActive}
            isEdit={props.isEdit}
            data={props.data}
            />
    )
}