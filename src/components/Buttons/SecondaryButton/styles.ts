import styled from "styled-components";
import { DefaultColors } from "../../../defaultColors";

export const Button = styled.button`
  cursor: pointer;
  border: none;
  padding: 8px;
  border-radius: 5px;
  color: #40350d;
  background: ${DefaultColors.EDIT_BUTTON};
  margin-right: 10px;

  :last-child {
    margin-right: 0px;
  }

  :hover {
    background: ${DefaultColors.EDIT_BUTTON_HOVER};
  }
`;

export const SecondaryAreaButton = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-content: flex-start;
  align-items: center;
`;
