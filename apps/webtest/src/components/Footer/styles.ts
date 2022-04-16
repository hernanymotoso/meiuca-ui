import styled from 'styled-components';

export const Container = styled.footer`
  width: 100%;
  height: 360px;
  background-color: #000000;

  margin-top: 60px;
`;

export const Center = styled.div`
  height: 100%;
  max-width: 1194px;
  padding: 0 20px;
  margin: 0 auto;

  display: flex;
  justify-content: center;
  align-items: center;

  flex-direction: column;

  > p {
    margin-top: 33px;
    margin-bottom: 47px;
    text-align: center;
    font-size: 16px;
    line-height: 22px;
    max-width: 450px;
    font-weight: 300;
    color: #ffffff;
  }

  > span {
    font-size: 16px;
    max-width: 450px;
    font-weight: 300;
    color: #a3a3a3;
    text-align: center;
  }
`;
