import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { PrimaryButton } from "../../../components/Buttons/PrimaryButton";
import { Page } from "../../../components/Page";
import { request } from "../../../services/request";
import { UserArea, UserListArea } from "./styled";

export const TeacherHours: React.FC = () => {
  const [users, setUsers] = useState<Array<any>>([]);
  const history = useHistory();

  const goToEditPage = (id: number) => {
    history.push(`horarios/${id}`);
  };

  const getUsers = async () => {
    const response = await request({
      method: "GET",
      path: "users/hours",
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
    <Page header="Horários por usuário">
      <></>
      <UserListArea>
        {users.map((u) => {
          return (
            <UserArea key={u.id}>
              <p>
                {u.theme.theme} - {u.team} - {u.hour}
              </p>
            </UserArea>
          );
        })}
      </UserListArea>
    </Page>
  );
};
