import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import { Loader } from "./components/Loader";
import { AuthProvider } from "./hooks/auth";
import { HeaderProvider } from "./hooks/headerHook";
import { Store } from "./redux/store";

ReactDOM.render(
  <AuthProvider>
    <HeaderProvider>
      <Provider store={Store}>
        <Loader />
        <App />
      </Provider>
    </HeaderProvider>
  </AuthProvider>,
  document.getElementById("root")
);
