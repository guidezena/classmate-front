import { Fragment, useEffect, useState } from "react";
import { NewButton } from "../../../../components/Buttons/PrimaryButton/styles";
import { FormInputText } from "../../../../components/FormInputs/Input";
import { FormArea } from "../../../../components/FormInputs/styles";
import { Page } from "../../../../components/Page";
import { request } from "../../../../services/request";
import sweetAlert from "../../../../utils/sweetAlert";
import Select from "react-select";
import { useHistory, useParams } from "react-router-dom";

export const EditTheme: React.FC = () => {
  const [user, setUser] = useState<{ [key: string]: any }>({});
  const [updatedValues, setUpdateValues] = useState<{ [key: string]: any }>({});
  const history = useHistory();

  const handleDelete = async () => {
    let res = await request({
      loadingMessage: "Deletando...",
      method: "DELETE",
      path: `users/admin/themes/${id}`,
    });

    if (!res.error) {
      history.push(`/materias`);
    }
  };

  const handleUpdate = async () => {
    let res = await request({
      loadingMessage: "Atualizando...",
      method: "PUT",
      path: `users/admin/themes/${id}`,
      data: updatedValues,
    });

    if (!res.error) {
      history.push(`/materias`);
    }
  };

  const handleOnChangeInput = async (value: any, key: string) => {
    if (key === "userId") {
      value = value.value;
    }

    if (key === "theme") {
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
      path: `users/admin/themes/${id}`,
      showSuccessMessage: false,
    });
    if (!response.error) {
      setUser(response);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <Page header="Matéria > Editar matéria">
      <Fragment></Fragment>
      {user && user.name && (
        <FormArea>
          <FormInputText
            disabled
            readOnly
            label="Usúario"
            name="institution"
            onChangeFather={() => {}}
            width="100%"
            value={user.name ? user.name : ""}
          />
          <FormInputText
            label="Instituição"
            name="institution"
            onChangeFather={handleOnChangeInput}
            width="100%"
            value={user.institution ? user.institution : ""}
          />
          <Select
            onChange={(e) => handleOnChangeInput(e, "theme")}
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
        </FormArea>
      )}
      <>
        <NewButton onClick={handleDelete}>excluir</NewButton>
        <NewButton onClick={handleUpdate}>salvar</NewButton>
      </>
    </Page>
  );
};
