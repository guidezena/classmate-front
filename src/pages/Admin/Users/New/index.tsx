import { Fragment, useEffect, useState } from "react";
import { NewButton } from "../../../../components/Buttons/PrimaryButton/styles";
import { FormInputText } from "../../../../components/FormInputs/Input";
import { FormArea } from "../../../../components/FormInputs/styles";
import { Page } from "../../../../components/Page";
import { request } from "../../../../services/request";
import sweetAlert from "../../../../utils/sweetAlert";
import Select from "react-select";

export const NewUser: React.FC = () => {
  const [user, setUser] = useState<{ [key: string]: any }>({});

  const handleSave = async () => {
    await request({
      loadingMessage: "Criando...",
      method: "POST",
      path: `users`,
      data: user,
    });
  };

  const handleOnChangeInput = async (value: any, key: string) => {
    if (key === "type") {
      value = value.value;
    }

    if (key === "themes") {
      value = value.map((v: any) => {
        return v.value;
      });
    }

    setUser((oldClient) => {
      return {
        ...oldClient,
        [key]: value,
      };
    });
  };

  return (
    <Page header="Usuário > Novo">
      <Fragment></Fragment>
      <FormArea>
        <FormInputText
          label="Nome"
          name="name"
          onChangeFather={handleOnChangeInput}
          width="49%"
          defaultValue={user.name ? user.name : ""}
        />
        <FormInputText
          label="E-mail"
          name="email"
          onChangeFather={handleOnChangeInput}
          width="49%"
          defaultValue={user.email ? user.email : ""}
        />
        <FormInputText
          label="Instituição"
          name="institution"
          onChangeFather={handleOnChangeInput}
          width="49%"
          defaultValue={user.institution ? user.institution : ""}
        />
        <FormInputText
          label="Senha"
          name="password"
          onChangeFather={handleOnChangeInput}
          width="49%"
          type={"password"}
          defaultValue={user.password ? user.password : ""}
        />
        <Select
          onChange={(e) => handleOnChangeInput(e, "type")}
          placeholder="Permissão"
          options={[
            {
              label: "Professor",
              value: "teacher",
            },
            {
              label: "Aluno",
              value: "student",
            },
          ]}
        />
        <Select
          onChange={(e) => handleOnChangeInput(e, "themes")}
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
          isMulti
        />
      </FormArea>

      <NewButton onClick={handleSave}>salvar</NewButton>
    </Page>
  );
};
