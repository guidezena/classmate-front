import { Link } from "react-router-dom";
import styled from "styled-components";

export const PageArea = styled.div`
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  margin-top: 20px;
  overflow: visible;
  height: calc(100vh - 278px);
`;

export const PageHeader = styled.div``;

export const AreaButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  button {
    margin-right: 5px;
  }

  button:nth-last-child() {
    margin-right: 0px;
  }
`;

export const NewButton = styled(Link)`
  color: #fff;
  padding: 4px;
  border-radius: 4px;
  background: #1f0533;
  font-size: 12px;
  font-weight: 400;

  :hover {
    background: #330b52;
  }
`;

export const PageBody = styled.div`
  width: 100%;
  overflow: visible;
`;

export const PageFooter = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;

  button {
    padding: 10px;
    font-weight: 400;
    font-size: 14px;
  }
`;
