import styled from '@emotion/styled';

export const Wrapper = styled.div`
  width: 1200px;
  margin: 100px;
`;

export const CardWrapper = styled.div`
    border: none;
    padding: 80px 102px 100px 102px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 10px gray
`;

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #bdbdbd;
    padding-bottom: 20px;
`;

export const AvatarWrapper = styled.div`
    display: flex;
`;

export const Avatar = styled.img`
  margin-right: 10px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-contents: center;
`;

export const Writer = styled.div``;

export const CreatedAt = styled.div``;

export const Body = styled.div`
    width: 100%;
    min-height: 800px;
`;

export const Title = styled.div`
    padding-top: 80px;
`;

export const Contents = styled.div`
    padding-top: 40px;
    padding-bottom: 120px;
`;

export const BottomWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 80px;
`;

export const Button = styled.button`
    width: 179px;
    height: 45px;
    background-color: white;
    border: 1px solid gray;
    margin: 0px 12px;
    cursor: pointer;

    :hover {
        background-color: gold;
        border-color: white;
    }
`;