import styled from "styled-components";
import { DefaultColors } from "../../defaultColors";
export const LoadingArea = styled.div`
  position: fixed;
  z-index: 9999;
  height: 100%;
  background-color: #00000047;
  width: 100%;
  display: flex;
  width: 100%;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;

  img {
    width: 100px;
  }

  p {
    color: ${DefaultColors.LOADER_TEXT_COLOR};
  }
`;
