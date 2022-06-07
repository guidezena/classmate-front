import { Button, SecondaryAreaButton } from "./styles";

export { SecondaryAreaButton };

interface IEditButton {
  onClick?: Function;
}

export const SecondaryButton: React.FC<IEditButton> = ({
  onClick,
  ...props
}) => {
  return <Button onClick={() => onClick && onClick()}>{props.children}</Button>;
};
