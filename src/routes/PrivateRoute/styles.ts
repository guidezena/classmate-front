import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  flex-direction: row;
  flex-wrap: nowrap;
  align-content: flex-start;
  justify-content: space-evenly;
  align-items: flex-start;
  background: #e3f0e7;
`;

export const ContentArea = styled.div`
  padding: 20px;
  width: 65%;
  overflow: auto;
  background: #fff;
  margin-top: 69px;
  border-radius: 41px;
`;

export const Title = styled.h1`
  padding: 10px 10px 10px 0px;
  width: calc(100% - 10px);
  font-size: 20px;
  font-weight: 600;
`;

export const FirstBar = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 25px;
  background: #c9e1d0;

  h1 {
    font-size: 20px;
    font-style: italic;
    color: #fff;
  }

  button {
    background: transparent;
    border: none;
    cursor: pointer;

    img {
      width: 30px;
    }
  }
`;
