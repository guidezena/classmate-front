import axios, { AxiosRequestConfig } from "axios";
import { clearLs } from "../localStorage";
import { Dispatch } from "../redux/store";
import { getIpData } from "../utils";
import sweetAlert from "../utils/sweetAlert";
const SuccessAlert = sweetAlert.success;
const ErrorAlert = sweetAlert.error;

interface IRequest {
  showLoading?: Boolean;
  loadingMessage?: string;
  timeout?: number;
  showSuccessMessage?: Boolean | string;
  showErrorMessage?: Boolean | string;
  method:
    | "get"
    | "GET"
    | "delete"
    | "DELETE"
    | "head"
    | "HEAD"
    | "options"
    | "OPTIONS"
    | "post"
    | "POST"
    | "put"
    | "PUT"
    | "patch"
    | "PATCH"
    | "purge"
    | "PURGE"
    | "link"
    | "LINK"
    | "unlink"
    | "UNLINK"
    | undefined;
  path: string;
  baseUrl?: string;
  data?: any;
  removeIp?: boolean;
}

export const request = (params: IRequest): Promise<any> => {
  const showLoading =
    params.showLoading !== undefined ? params.showLoading : true;
  const loadingMessage =
    params.loadingMessage !== undefined ? params.loadingMessage : "Carregando";
  const timeout = params.timeout !== undefined ? params.timeout : 10000;
  const showSuccessMessage =
    params.showSuccessMessage === undefined ? true : params.showSuccessMessage;
  const showErrorMessage =
    params.showErrorMessage === undefined ? true : params.showErrorMessage;
  const method = params.method;
  let path = params.path;
  const baseUrl = params.baseUrl;
  const removeIp = params.removeIp ? params.removeIp : false;

  let data = params.data;

  let showLoadingTimeout: any = null;
  if (showLoading) {
    showLoadingTimeout = setTimeout(function () {
      Dispatch({
        type: "show_loader",
        show: true,
      });
      Dispatch({
        type: "loader_set_message",
        message: loadingMessage,
      });
    }, 1000);
  }

  const base_url = !baseUrl ? process.env.REACT_APP_BASE_API_URL : baseUrl;

  return new Promise(async (resolve, reject) => {
    let ip: any = null;

    if (!removeIp) {
      try {
        ip = await getIpData();
      } catch {}

      if (data) {
        data.ip = ip;
      } else {
        data = {
          ip: ip,
        };
      }
    }

    if (data && data.ip && method === "GET") {
      let pathExplode = path.split("?");

      path = pathExplode[1]
        ? `${pathExplode[0]}?${pathExplode[1]}&ip=${data.ip}`
        : `${pathExplode[0]}?ip=${data.ip}`;
    }

    let config: AxiosRequestConfig = {
      method: method,
      url: `${base_url}/${path}`,
      timeout: timeout,
      headers: {},
    };

    let token = window.localStorage.getItem(
      process.env.REACT_APP_KEY_TOKEN ?? ""
    );

    if (token) {
      config.headers.Authorization = token;
    }

    if (data) {
      config.data = data;
    }

    return axios(config)
      .then((response) => {
        clearTimeout(showLoadingTimeout);
        Dispatch({
          type: "show_loader",
          show: false,
        });
        if (showSuccessMessage) {
          SuccessAlert(
            response.data.msg
              ? response.data.msg
              : showSuccessMessage.toString()
          );
        }
        resolve(response.data);
      })
      .catch((error) => {
        clearTimeout(showLoadingTimeout);
        Dispatch({
          type: "show_loader",
          show: false,
        });
        if (
          error.response.data.message === "Unauthorized" &&
          error.response.data.statusCode === 401
        ) {
          clearLs();
          window.location.href = "/login";
          return;
        }

        if (showErrorMessage) {
          if (error.response && error.response.data) {
            if (error.response.data.errors) {
              ErrorAlert(error.response.data.errors.join("\n"));
            } else if (error.response.data.msg) {
              ErrorAlert(error.response.data.msg);
            } else {
              ErrorAlert(showErrorMessage.toString());
            }
          }
        }
        resolve({
          error: error.response ? error.response.data : "timeout",
        });
      });
  });
};
