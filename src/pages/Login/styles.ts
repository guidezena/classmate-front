import styled from "styled-components";

export const LeftArea = styled.div`
  height: 100vh;
  width: 440px;
  background: #e3f0e7;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  outline: 10px solid #abbfb1;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export const LeftAreaContent = styled.div`
  padding: 40px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-content: center;
  justify-content: center;
  align-items: center;

  h5 {
    font-weight: 500;
    font-size: 50px;
    text-align: center;
    color: #84a78e;
  }

  p {
    font-size: 16px;
    text-align: center;
  }

  input {
    width: 100%;
    height: 20px;
    padding: 10px;
    border: 1px solid #c6ccc6;

    margin: 10px 0px;
    border-radius: 14px;
  }

  button {
    width: 200px;
    height: 50px;
    border: none;
    cursor: pointer;
    border-radius: 20px;
    background: #84a78e;
  }
`;

export const RightArea = styled.div`
  width: calc(100% - 451px);
  text-align: center;

  h1 {
    margin-top: 70px;
    color: #fff;
    font-size: 60px;
    font-style: italic;
  }
`;

export const LoginArea = styled.div`
  width: 100%;
  height: 100vh;
  background: #c9e1d0;
  display: flex;
  flex-direction: row;
`;
