import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { PrimaryButton } from "../../../components/Buttons/PrimaryButton";
import { Page } from "../../../components/Page";
import { request } from "../../../services/request";
import { UserArea, UserListArea } from "./styled";

interface IUser {
  name: string;
  email: string;
  type: string;
}

export const Users: React.FC = () => {
  const [users, setUsers] = useState<Array<IUser>>([]);
  const history = useHistory();

  const gotToPage = (route: string) => {
    history.push(route);
  };

  const getUsers = async () => {
    const response = await request({
      method: "GET",
      path: "users",
      showSuccessMessage: false,
    });

    if (!response.error) {
      setUsers(response);
    }
  };

  const handleNeUser = () => {
    history.push("/usuarios/novo");
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Page header="Usúarios">
      <PrimaryButton text="+ novo usuário" onClick={handleNeUser} />
      <UserListArea>
        {users.map((u) => {
          return (
            <UserArea>
              <p>Nome: {u.name}</p>
              <p>E-mail: {u.email}</p>
              <p>Permissão: {u.type}</p>
            </UserArea>
          );
        })}
      </UserListArea>
    </Page>
  );
};
