import styled from "styled-components";

export const InputArea = styled.div`
  width: ${({ width }: { width?: string }) => (width ? width : "48%")};
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  min-width: 200px;

  input {
    width: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    border: 1px solid #ccc;
    padding: 10px;
  }

  label {
    margin-bottom: 5px;
    font-size: 16px;
    font-weight: 300;
  }
`;
