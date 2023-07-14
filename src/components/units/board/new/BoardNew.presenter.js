import {
    Address,
    ButtonWrapper,
    Contents,
    Error,
    ImageWrapper,
    InputWrapper,
    Label,
    OptionWrapper,
    Password,
    RadioButton,
    RadioLabel,
    SearchButton,
    Subject,
    SubmitButton,
    Title,
    UploadButton,
    Wrapper,
    Writer,
    WriterWrapper,
    Youtube,
    Zipcode,
    ZipcodeWrapper
  } from "./BoardNew.styles";

export default function BoardNewUI(props){

    return(
        <Wrapper>
            <Title>게시물등록</Title>
            <WriterWrapper>
                <InputWrapper>
                    <Label>작성자</Label>
                    <Writer type="text" placeholder="이름을 적어주세요." onChange={props.onChangeWriter}></Writer>
                    <Error>{props.writerError}</Error>
                </InputWrapper>
                <InputWrapper>
                    <Label>비밀번호</Label>
                    <Password type="password" placeholder="비밀번호를 입력해주세요." onChange={props.onChangePassword}></Password>
                    <Error>{props.passwordError}</Error>
                </InputWrapper>
            </WriterWrapper>
            <InputWrapper>
                <Label>제목</Label>
                <Subject type="text" placeholder="제목을 작성해주세요." onChange={props.onChangeTitle}></Subject>
                <Error>{props.titleError}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label>내용</Label>
                <Contents placeholder="내용을 작성해주세요." onChange={props.onChangeContents}></Contents>
                <Error>{props.contentsError}</Error>
            </InputWrapper>
            <InputWrapper>
                <Label>주소</Label>
                <ZipcodeWrapper>
                    <Zipcode placeholder="07250"></Zipcode>
                    <SearchButton>우편번호 검색</SearchButton>
                </ZipcodeWrapper>
                <Address />
                <Address />
            </InputWrapper>
            <InputWrapper>
                <Label>유튜브</Label>
                <Youtube placeholder="링크를 복사해주세요."/>
            </InputWrapper>
            <ImageWrapper>
                <Label>사진 첨부</Label>
                <UploadButton>+</UploadButton>
                <UploadButton>+</UploadButton>
                <UploadButton>+</UploadButton>
            </ImageWrapper>
            <OptionWrapper>
                <Label>메인 설정</Label>
                <RadioButton type="radio" id="youtube" name="radio-button"/>
                <RadioLabel htmlFor="youtube">유튜브</RadioLabel>
                <RadioButton type="radio" id="image" name="radio-button"/>
                <RadioLabel htmlFor="image">사진</RadioLabel>
            </OptionWrapper>
            <ButtonWrapper>
                <SubmitButton onClick={props.onClickSubmit}>등록하기</SubmitButton>
            </ButtonWrapper>
        </Wrapper>
    )
}