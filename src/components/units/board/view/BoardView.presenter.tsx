import { Avatar, AvatarWrapper, Body, BottomWrapper, Button, CardWrapper, Contents, CreatedAt, Header, Info, Title, Wrapper, Writer } from "./BoardView.styles";
import { BoardViewUIProps } from "./BoardView.types";

export default function BoardViewUI(props: BoardViewUIProps){
    
    return(
        <Wrapper>
            <CardWrapper>
                <Header>
                    <AvatarWrapper>
                    <Avatar src="/images/avatar.png" />
                    <Info>
                        <Writer>{props.data?.fetchBoard?.writer}</Writer>
                        <CreatedAt>
                        {props.data?.fetchBoard?.createdAt}
                        </CreatedAt>
                    </Info>
                    </AvatarWrapper>
                </Header>
                <Body>
                    <Title>{props.data?.fetchBoard?.title}</Title>
                    <Contents>{props.data?.fetchBoard?.contents}</Contents>
                </Body>
            </CardWrapper>
        <BottomWrapper>
          <Button onClick={props.onClickMoveBoards}>목록으로</Button>
          <Button onClick={props.onClickMoveBoardUpdate}>수정하기</Button>
          <Button id={props.data?.fetchBoard?._id} onClick={props.onClickDelete}>삭제하기</Button>
        </BottomWrapper>
        </Wrapper>
    )
}