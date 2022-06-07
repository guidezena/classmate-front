import { useEffect } from "react";
import { useHeader } from "../../hooks/headerHook";
import {
  AreaButtons,
  PageArea,
  PageBody,
  PageFooter,
  PageHeader,
} from "./styles";

interface ISideBar {
  children: Array<JSX.Element>;
  header: string;
}

export const Page: React.FC<ISideBar> = ({ children, header, ...rest }) => {
  const { setHeader } = useHeader();

  useEffect(() => {
    setHeader(header);
  }, [header, setHeader]);

  return (
    <PageArea>
      <PageHeader>
        <AreaButtons>{children[0] && children[0]}</AreaButtons>
      </PageHeader>
      <PageBody>{children[1]}</PageBody>
      <PageFooter>{children[2]}</PageFooter>
    </PageArea>
  );
};
