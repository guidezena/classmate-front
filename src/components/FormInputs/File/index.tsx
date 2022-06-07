import { InputArea } from "./styles";

interface INewButton {
  label: string;
  name: string;
  onChangeFather: Function;
  width?: string;
  defaultValue?: string;
  accept: string;
}

export const FormInputFile: React.FC<INewButton> = ({
  label,
  name,
  onChangeFather,
  width,
  defaultValue,
  accept,
  ...props
}) => {
  return (
    <InputArea width={width}>
      <label>{label}</label>
      <input
        accept={accept}
        type="file"
        onChange={(e) => onChangeFather(e.target.files, name)}
        name={name}
        defaultValue={defaultValue}
      />
    </InputArea>
  );
};
