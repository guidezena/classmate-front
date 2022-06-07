import { Fragment, useEffect, useState } from "react";
import { NewButton } from "../../../../components/Buttons/PrimaryButton/styles";
import { FormInputText } from "../../../../components/FormInputs/Input";
import { FormArea } from "../../../../components/FormInputs/styles";
import { Page } from "../../../../components/Page";
import { request } from "../../../../services/request";
import sweetAlert from "../../../../utils/sweetAlert";
import Select from "react-select";

export const NewTheme: React.FC = () => {
  const [theme, setTheme] = useState<{ [key: string]: any }>({});
  const [users, setUsers] = useState<Array<any>>([]);

  const handleSave = async () => {
    await request({
      loadingMessage: "Criando...",
      method: "POST",
      path: `users/themes`,
      data: theme,
    });
  };

  const handleOnChangeInput = async (value: any, key: string) => {
    if (key === "userId") {
      value = value.value;
    }

    if (key === "theme") {
      value = value.value;
    }

    setTheme((oldTheme) => {
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

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Page header="Matéria > Nova matéria">
      <Fragment></Fragment>
      <FormArea>
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
          onChange={(e) => handleOnChangeInput(e, "theme")}
          placeholder="Selecione a(s) matéria(s)"
          options={[
            {
              label: "Física",
              value: "física",
            },
            {
              label: "Português",
              value: "português",
            },
          ]}
        />
        <FormInputText
          label="Instituição"
          name="institution"
          onChangeFather={handleOnChangeInput}
          width="49%"
          defaultValue={theme.institution ? theme.institution : ""}
        />
      </FormArea>

      <NewButton onClick={handleSave}>salvar</NewButton>
    </Page>
  );
};
