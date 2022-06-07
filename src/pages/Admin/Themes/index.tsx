import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { PrimaryButton } from "../../../components/Buttons/PrimaryButton";
import { Page } from "../../../components/Page";
import { request } from "../../../services/request";
import { UserArea, UserListArea } from "./styled";

interface IUser {
  id: number;
  name: string;
  email: string;
  type: string;
  themes: Array<{ institution: string; theme: string }>;
}

interface IThemeWithUser {
  id: number;
  name: string;
  email: string;
  type: string;
  institution: string;
  theme: string;
}

export const Themes: React.FC = () => {
  const [users, setUsers] = useState<Array<IThemeWithUser>>([]);
  const history = useHistory();

  const goToEditPage = (id: number) => {
    history.push(`materias/${id}`);
  };

  const getUsers = async () => {
    const response = await request({
      method: "GET",
      path: "users/admin/themes",
      showSuccessMessage: false,
    });

    if (!response.error) {
      const themesWithUsers: any = [];
      response.forEach((u: IUser) => {
        u.themes.forEach((t) => {
          themesWithUsers.push({ ...t, name: u.name });
        });
      });
      setUsers(themesWithUsers);
    }
  };

  const handleNeUser = () => {
    history.push("/materias/novo");
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Page header="Matérias por usuário">
      <PrimaryButton text="+ nova matéria" onClick={handleNeUser} />
      <UserListArea>
        {users.map((u) => {
          return (
            <UserArea key={u.id}>
              <p>
                {u.theme} - {u.institution} - {u.name}
              </p>
              <PrimaryButton
                onClick={() => goToEditPage(u.id)}
                text="Alterar"
              />
            </UserArea>
          );
        })}
      </UserListArea>
    </Page>
  );
};
