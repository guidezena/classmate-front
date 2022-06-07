import styled from "styled-components";

export const FormArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-end;

  h5 {
    width: 100%;
    margin: 15px 0px;
    border-bottom: 1px solid #ccc;
    padding-bottom: 10px;
    font-size: 18px;
    font-weight: 500;

    small {
      font-size: 12px;
      font-weight: 300;
    }
  }

  div[class*="container"] {
    width: ${({ reactSelectWidth }: { reactSelectWidth?: string }) =>
      reactSelectWidth ? reactSelectWidth : "48%"};
  }
`;
