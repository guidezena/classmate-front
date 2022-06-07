import { NewButton as NewButtonStyle } from "./styles";

interface INewButton {
  text: string;
  onClick?: Function;
}

export const PrimaryButton: React.FC<INewButton> = ({
  text,
  onClick,
  ...props
}) => {
  return (
    <NewButtonStyle onClick={() => onClick && onClick()}>{text}</NewButtonStyle>
  );
};
