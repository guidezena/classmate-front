import { Fragment, useEffect, useState } from "react";
import { NewButton } from "../../../../components/Buttons/PrimaryButton/styles";
import { FormInputText } from "../../../../components/FormInputs/Input";
import { FormArea } from "../../../../components/FormInputs/styles";
import { Page } from "../../../../components/Page";
import { request } from "../../../../services/request";
import sweetAlert from "../../../../utils/sweetAlert";
import Select from "react-select";

export const NewHour: React.FC = () => {
  const [hour, setHour] = useState<{ [key: string]: any }>({});
  const [themes, setThemes] = useState<{ [key: string]: any }>({});
  const [users, setUsers] = useState<Array<any>>([]);
  const [themesByUser, setThemesByUser] = useState<Array<any>>([]);

  const handleSave = async () => {
    await request({
      loadingMessage: "Criando...",
      method: "POST",
      path: `users/admin/hours`,
      data: hour,
    });
  };

  const handleOnChangeInput = async (value: any, key: string) => {
    if (key === "userId") {
      value = value.value;
      let userThemes = themes.find((t: any) => t.id === value);
      userThemes = userThemes.themes ?? [];
      setThemesByUser([]);

      setThemesByUser(
        userThemes.map((t: any) => {
          return {
            label: `${t.theme} -  ${t.institution}`,
            value: t.id,
          };
        })
      );
    }

    if (key === "hour") {
      value = value.value;
    }

    if (key === "themeId") {
      value = value.value;
    }

    setHour((oldTheme) => {
      return {
        ...oldTheme,
        [key]: value,
      };
    });
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

  const getThemes = async () => {
    const response = await request({
      method: "GET",
      path: "users/admin/themes",
      showSuccessMessage: false,
    });

    if (!response.error) {
      setThemes(response);
    }
  };

  useEffect(() => {
    getUsers();
    getThemes();
  }, []);

  return (
    <Page header="Horario > Novo horario">
      <Fragment></Fragment>
      <FormArea>
        <FormInputText
          label="Turma"
          name="team"
          onChangeFather={handleOnChangeInput}
          width="100%"
          defaultValue={hour.team ? hour.team : ""}
        />
        <Select
          onChange={(e) => handleOnChangeInput(e, "userId")}
          placeholder="Usuário"
          options={users.map((u) => {
            return {
              value: u.id,
              label: u.name,
            };
          })}
        />

        <Select
          onChange={(e) => handleOnChangeInput(e, "themeId")}
          placeholder="Selecione a(s) matéria(s)"
          options={themesByUser}
        />
        <div style={{ marginTop: "20px", width: "100%" }}></div>
        <Select
          onChange={(e) => handleOnChangeInput(e, "hour")}
          placeholder="Selecione o horário"
          options={[
            {
              label: "Segunda - 11:45",
              value: "Segunda - 11:45",
            },
            {
              label: "Terça - 11:45",
              value: "Terça - 11:45",
            },

            {
              label: "Segunda - 14:00",
              value: "Segunda - 14:00",
            },
          ]}
        />
      </FormArea>

      <NewButton onClick={handleSave}>salvar</NewButton>
    </Page>
  );
};
