import { InputArea } from "./styles";

interface ISelect {
  label: string;
  name: string;
  onChangeFather: Function;
  width?: string;
  defaultValue?: string;
  options: Array<{ name: string; value: string }>;
}

export const Select: React.FC<ISelect> = ({
  label,
  name,
  onChangeFather,
  width,
  defaultValue,
  options,
  ...props
}) => {
  return (
    <InputArea width={width}>
      <label>{label}</label>
      <select
        name={name}
        defaultValue={defaultValue !== undefined ? defaultValue : ""}
        onChange={(e) => onChangeFather(e.target.value, name)}
      >
        <option value="" disabled>
          Selecione...
        </option>
        {options.map((o) => {
          return (
            <option key={o.value} value={o.value}>
              {o.name}
            </option>
          );
        })}
      </select>
    </InputArea>
  );
};
