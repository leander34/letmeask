import styled from 'styled-components';

export const Container = styled.div`
  > header {
    padding: 24px;
    border-bottom: 1px solid #e3e3e3;
  }
`;

export const HeaderContent = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > img {
    max-height: 45px;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 16px;

    button {
      height: 40px;
    }

  }
`;

export const Main = styled.main`
  max-width: 800px;
  margin: 0 auto;
`;

export const RoomTitle = styled.div`
  margin: 32px 0 24px;
  display: flex;
  align-items: center;

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 24px;
    color: #29292e;
  }

  > span {
    margin-left: 16px;
    background: #e559f9;
    border-radius: 9999px;
    padding: 8px 16px;
    color: #FFF;
    font-weight: 500;
    font-size: 14px;
  }
`;

export const Form = styled.form`
  > textarea {
    width: 100%;
    border: 0;
    padding: 16px;
    border-radius: 8px;
    background: #fefefe;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    resize: vertical;
    min-height: 130px;
  }

  .form-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 16px;

    > span {
        font-size: 14px;
        color: #737380;
        font-weight: 500;

        > button {
            background: transparent;
            border: 0;
            color: #835AFD;
            text-decoration: underline;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
        }
    }
  }
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }

  > span {
    margin-left: 8px;
    color: #29292e;
    font-weight: 500;
    font-size: 14px;
  }
`;


export const QuestionList = styled.div`
  margin-top: 32px;
`;