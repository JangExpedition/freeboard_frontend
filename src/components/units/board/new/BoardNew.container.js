import BoardNewUI from "./BoardNew.presenter"
import { useMutation } from "@apollo/client";
import { useRouter } from "next/router";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardNew.queries"
import { useState } from "react";

export default function BoardNew(props){
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

    const [createBoard] = useMutation(CREATE_BOARD);
    const [updateBoard] = useMutation(UPDATE_BOARD);

    function onChangeWriter(event){
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

    function onChangePassword(event){
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

    function onChangeTitle(event){
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

    function onChangeContents(event){
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
                router.push(`/boards/${result.data.createBoard._id}`)
            } catch(error){
                alert(error.message);
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

      const updateBoardInput = {};
      if(title){
        updateBoardInput.title = title;
      }
      if(contents){
        updateBoardInput.contents = contents;
      }

      try {
        const result = await updateBoard({
          variables: {
            boardId: router.query.boardId,
            password,
            updateBoardInput
          },
        })
        router.push(`/boards/${result.data.updateBoard._id}`)
      } catch(error) {
        alert(error.message)
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