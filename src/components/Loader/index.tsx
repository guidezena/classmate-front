import { useSelector } from "react-redux";
import PLoading from "../../assets/images/pLoading.gif";
import { LoadingArea } from "./styles";

export const Loader = () => {
  const loading = useSelector((state: any) => state.loaderState.show);
  const message = useSelector((state: any) => state.loaderState.message);

  return (
    <>
      {loading && (
        <LoadingArea>
          <p>{message}</p>
        </LoadingArea>
      )}
    </>
  );
};
