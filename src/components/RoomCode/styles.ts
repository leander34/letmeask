import styled from 'styled-components';

export const Button = styled.button`
  height: 40px;
  border-radius: 8px;

  overflow: hidden;

  background: #FFF;
  border: 0;
  border: 1px solid #835afd;
  cursor: pointer;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */

  > div {
    height: 100%;
    background: #835afd;
    padding: 0 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span {
    /* display: flex; */
    /* align-self: center; */
    flex: 1;
    padding: 0 16px 0 12px;
    /* width: 240px; */

    font-size: 14px;
    font-weight: 500;
  }
`;
