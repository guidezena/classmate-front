import { InputArea } from "./styles";

interface INewButton {
  label: string;
  name: string;
  onChangeFather: Function;
  width?: string;
}

type InputProps = JSX.IntrinsicElements["input"] & INewButton;

export const FormInputText: React.FC<InputProps> = ({
  label,
  name,
  onChangeFather,
  width,
  defaultValue,
  ...props
}) => {
  return (
    <InputArea width={width}>
      <label>{label}</label>
      <input
        {...props}
        type={props.type ?? "text"}
        onChange={(e) => onChangeFather(e.target.value, name)}
        name={name}
      />
    </InputArea>
  );
};
