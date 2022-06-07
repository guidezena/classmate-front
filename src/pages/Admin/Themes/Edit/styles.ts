import styled from "styled-components";
import { DefaultColors } from "../../../../defaultColors";

export const GuestTexArea = styled.textarea`
  width: calc(100% - 42px);
  display: block;
  border-radius: 6px;
  border: 1px solid #ccc;
  min-height: 400px;
  margin-top: 10px;
  resize: none;
  padding: 20px;

  outline: none;

  :focus {
    border: 1px solid ${DefaultColors.TEXT_AREA_BORDER};
  }
`;
