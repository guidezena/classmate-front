import { Link as ReactRouterLink } from "react-router-dom";
import styled from "styled-components";
import { DefaultColors } from "../../defaultColors";
import { Button } from "../Buttons/SecondaryButton/styles";

export const NavArea = styled.nav`
  width: 220px;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgb(0 0 0 / 15%);
  border-radius: 40px;
  padding: 20px;
  color: #c9e1d0;
  margin-top: 66px; ;
`;

export const Menu = styled.ul`
  margin-top: 20px;
  width: 100%;

  li {
    margin-bottom: 10px;
  }
`;

export const Link = styled(ReactRouterLink)`
  cursor: pointer;
  text-transform: uppercase;
  font-style: italic;
  font-weight: 400;
  font-size: 25px;
  text-align: center;

  color: ${({ linkactive }: { linkactive: string }) =>
    linkactive === "true" ? "#84a78e" : "#c9e1d0"};

  :hover {
    color: #84a78e;

    transition: 0.5s;
  }
`;
