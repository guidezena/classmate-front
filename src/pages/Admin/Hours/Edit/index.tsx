import { Fragment, useEffect, useState } from "react";
import { NewButton } from "../../../../components/Buttons/PrimaryButton/styles";
import { FormInputText } from "../../../../components/FormInputs/Input";
import { FormArea } from "../../../../components/FormInputs/styles";
import { Page } from "../../../../components/Page";
import { request } from "../../../../services/request";
import sweetAlert from "../../../../utils/sweetAlert";
import Select from "react-select";
import { useHistory, useParams } from "react-router-dom";

export const EditHour: React.FC = () => {
  const [user, setUser] = useState<{ [key: string]: any }>({});
  const [updatedValues, setUpdateValues] = useState<{ [key: string]: any }>({});
  const history = useHistory();

  const handleDelete = async () => {
    let res = await request({
      loadingMessage: "Deletando...",
      method: "DELETE",
      path: `users/admin/hours/${id}`,
    });

    if (!res.error) {
      history.push(`/horarios`);
    }
  };

  const handleUpdate = async () => {
    let res = await request({
      loadingMessage: "Atualizando...",
      method: "PUT",
      path: `users/admin/hours/${id}`,
      data: updatedValues,
    });

    if (!res.error) {
      history.push(`/horarios`);
    }
  };

  const handleOnChangeInput = async (value: any, key: string) => {
    if (key === "userId") {
      value = value.value;
    }

    if (key === "theme") {
      value = value.value;
    }

    if (key === "hour") {
      value = value.value;
    }

    setUser((oldTheme) => {
      return {
        ...oldTheme,
        [key]: value,
      };
    });

    setUpdateValues((oldTheme) => {
      return {
        ...oldTheme,
        [key]: value,
      };
    });
  };

  const { id } = useParams<any>();

  const getUsers = async () => {
    const response = await request({
      method: "GET",
      path: `users/admin/hours/${id}`,
      showSuccessMessage: false,
    });
    if (!response.error) {
      setUser({
        institution: response.theme.institution,
        team: response.hour.team,
        theme: response.theme.theme,
        hour: response.hour.hour,
      });
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Page header="Horario > Editar horario">
      <Fragment></Fragment>
      {user && user.theme && (
        <FormArea>
          <FormInputText
            disabled
            readOnly
            label="Instituição"
            name="institution"
            onChangeFather={() => {}}
            width="100%"
            value={user.institution ? user.institution : ""}
          />
          <FormInputText
            label="Turma"
            name="team"
            onChangeFather={handleOnChangeInput}
            width="100%"
            value={user.team ? user.team : ""}
          />
          <Select
            isDisabled
            onChange={(e) => {}}
            value={
              [
                {
                  label: "Física",
                  value: "física",
                },
                {
                  label: "Português",
                  value: "português",
                },
              ].filter((t) => t.value === user.theme)[0]
            }
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
          <Select
            onChange={(e) => handleOnChangeInput(e, "hour")}
            value={
              [
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
              ].filter((t) => t.value === user.hour)[0]
            }
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
      )}
      <>
        <NewButton onClick={handleDelete}>excluir</NewButton>
        <NewButton onClick={handleUpdate}>salvar</NewButton>
      </>
    </Page>
  );
};
