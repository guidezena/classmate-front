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

export const TeacherThemes: React.FC = () => {
  const [users, setUsers] = useState<Array<IThemeWithUser>>([]);
  const history = useHistory();

  const goToEditPage = (id: number) => {
    history.push(`materias/${id}`);
  };

  const getUsers = async () => {
    const response = await request({
      method: "GET",
      path: "users/themes",
      showSuccessMessage: false,
    });

    if (!response.error) {
      setUsers(response);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Page header="Matéria(s) lecionada(s)">
      <></>
      <UserListArea>
        {users.map((u) => {
          return (
            <UserArea key={u.id}>
              <p>
                {u.theme} - {u.institution}
              </p>
            </UserArea>
          );
        })}
      </UserListArea>
    </Page>
  );
};
