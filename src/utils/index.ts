import React from "react";
import { getLsUserToken } from "../localStorage";

function parseJwt(token: string) {
  const tokenOnly = token.split(" ")[1];
  var base64Url = tokenOnly.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );

  return JSON.parse(jsonPayload);
}

export const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getPayload = () => {
  const token = getLsUserToken();
  if (!token) {
    return {};
  }

  return parseJwt(token);
};

export const verifyIsMobileOrDesktop = () => {
  if (window.outerWidth >= 1100) return "desktop";

  return "mobile";
};

export const useStateRef = <S>(
  defaultValue: S
): [S, Function, { current: S }] => {
  let [state, setState] = React.useState(defaultValue);
  let ref = React.useRef(state);

  let dispatch = React.useCallback(function (val) {
    ref.current = typeof val === "function" ? val(ref.current) : val;
    setState(ref.current);
  }, []);

  return [state, dispatch, ref];
};

export const toSeoUrl = (url: string) => {
  // make the url lowercase
  let encodedUrl = url.toString().toLowerCase();
  encodedUrl = encodedUrl.split("&").join("e");
  encodedUrl = encodedUrl.replace(/[á|ã|â|à]/gi, "a");
  encodedUrl = encodedUrl.replace(/[é|ê|è]/gi, "e");
  encodedUrl = encodedUrl.replace(/[í|ì|î]/gi, "i");
  encodedUrl = encodedUrl.replace(/[õ|ò|ó|ô]/gi, "o");
  encodedUrl = encodedUrl.replace(/[ú|ù|û]/gi, "u");
  encodedUrl = encodedUrl.replace(/[ç]/gi, "c");
  encodedUrl = encodedUrl.replace(/[ñ]/gi, "n");
  encodedUrl = encodedUrl.replace(/[á|ã|â]/gi, "a");
  encodedUrl = encodedUrl.replace(/\W/gi, "-");
  encodedUrl = encodedUrl.replace(/(-)\1+/gi, "-");
  encodedUrl = encodedUrl.toLowerCase();
  return encodedUrl;
};

export const getIpData = async () => {
  let getIp = await fetch("https://ip-api.pessoalize.com/?format=json");
  let { ip } = await getIp.json();
  return ip;
};
