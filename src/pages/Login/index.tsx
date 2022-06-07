import { useState } from "react";
import { useHistory } from "react-router";
import PessoalizeLogo from "../../assets/images/pessoalizeLoginLogo.png";
import { useAuth } from "../../hooks/auth";
import { setLsUserToken } from "../../localStorage/index";
import { request } from "../../services/request";
import { LeftArea, LeftAreaContent, LoginArea, RightArea } from "./styles";

export const Login: React.FC = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const { verifyUserExists, getPayload } = useAuth();
  const history = useHistory();
  const handleLogin = async () => {
    const response = await request({
      showLoading: true,
      showSuccessMessage: false,
      method: "POST",
      path: `users/login`,
      data: {
        email: userName,
        password: password,
      },
    });
    if (response.accessToken) {
      setLsUserToken(response.accessToken);
      await verifyUserExists();

      if (getPayload().type === "admin") {
        history.push("/usuarios");
      } else {
        history.push("/professor/materias");
      }
    }
  };

  return (
    <LoginArea>
      <LeftArea>
        <LeftAreaContent>
          <h5>Acesse sua conta</h5>
          <p>
            Se já estiver cadastrado, insira seu e-mail e senha para acessar a
            conta
          </p>
          <input
            placeholder="Digite seu usuário"
            type="text"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
          />
          <input
            placeholder="Digite sua senha"
            type="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
          />

          <button
            onClick={handleLogin}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
          >
            Entrar
          </button>
        </LeftAreaContent>
      </LeftArea>
      <RightArea>
        <h1>Classmate</h1>
      </RightArea>
    </LoginArea>
  );
};
