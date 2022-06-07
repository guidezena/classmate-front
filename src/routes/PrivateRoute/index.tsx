import { Redirect, RouteProps as ReactDomRouteProps } from "react-router";
import { SideBar } from "../../components/SideBar";
import { useAuth } from "../../hooks/auth";
import { useHeader } from "../../hooks/headerHook";
import { Route } from "../Route";
import { Container, ContentArea, Title, FirstBar } from "./styles";
import ExitIcon from "../../assets/exit.png";
import { clearLs } from "../../localStorage";
import { useHistory } from "react-router-dom";

interface RouteProps extends ReactDomRouteProps {
  component: React.ComponentType;
  path: string;
  exact: boolean;
}

export const PrivateRoute: React.FC<RouteProps> = ({ ...rest }) => {
  const { getPayload } = useAuth();
  const { header, setHeader } = useHeader();
  const route = useHistory();

  const handleExitButton = () => {
    clearLs();
    route.push("/login");
  };

  if (!getPayload().userId) {
    return (
      <Redirect
        to={{
          pathname: "/login",
        }}
      />
    );
  }

  return (
    <>
      <FirstBar>
        <h1>CLASSMATE</h1>
        <button onClick={handleExitButton}>
          <img src={ExitIcon} alt="exit icon" />
        </button>
      </FirstBar>
      <Container>
        <SideBar setMenuTitle={setHeader} />
        <ContentArea>
          <Title>{header}</Title>
          <Route {...rest} />
        </ContentArea>
      </Container>
    </>
  );
};
