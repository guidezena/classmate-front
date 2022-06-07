import { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { PrimaryButton } from "../../../components/Buttons/PrimaryButton";
import { Page } from "../../../components/Page";
import { request } from "../../../services/request";
import { UserArea, UserListArea } from "./styled";

export const Hours: React.FC = () => {
  const [users, setUsers] = useState<Array<any>>([]);
  const history = useHistory();

  const goToEditPage = (id: number) => {
    history.push(`horarios/${id}`);
  };

  const getUsers = async () => {
    const response = await request({
      method: "GET",
      path: "users/admin/hours",
      showSuccessMessage: false,
    });

    if (!response.error) {
      const hoursWithUsers: any = [];
      response.forEach((u: any) => {
        u.hours.forEach((t: any) => {
          hoursWithUsers.push({
            id: t.id,
            name: u.name,
            hour: t.hour,
            team: t.team,
            theme: t.themes[0].theme,
          });
        });
      });
      setUsers(hoursWithUsers);
    }
  };

  const handleNeUser = () => {
    history.push("/horarios/novo");
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Page header="Horários por usuário">
      <PrimaryButton text="+ novo horário" onClick={handleNeUser} />
      <UserListArea>
        {users.map((u) => {
          return (
            <UserArea key={u.id}>
              <p>
                {u.name} - {u.theme} - {u.team} - {u.hour}
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
