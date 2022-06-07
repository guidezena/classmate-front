export const setProtocolId = (value: string) => {
  window.sessionStorage.setItem(process.env.REACT_APP_PROTOCOL_ID ?? "", value);
};

export const getProtocolId = () => {
  return window.sessionStorage.getItem(process.env.REACT_APP_PROTOCOL_ID ?? "");
};

export const setVisitantDevice = (value: Object) => {
  window.sessionStorage.setItem(
    process.env.REACT_APP_VISITANT_DEVICE ?? "",
    JSON.stringify(value)
  );
};

export const getVisitantDevice = () => {
  return window.sessionStorage.getItem(
    process.env.REACT_APP_VISITANT_DEVICE ?? ""
  );
};

export const removeProtocolId = () => {
  window.sessionStorage.removeItem(process.env.REACT_APP_PROTOCOL_ID ?? "");
};

export const setAttedantInRoom = (value: string) => {
  window.sessionStorage.setItem(
    process.env.REACT_APP_ATTENDANT_IN_ROOM ?? "",
    value
  );
};

export const getAttedantInRoom = () => {
  return window.sessionStorage.getItem(
    process.env.REACT_APP_ATTENDANT_IN_ROOM ?? ""
  );
};

export const removeAttedantInRoom = () => {
  window.sessionStorage.removeItem(
    process.env.REACT_APP_ATTENDANT_IN_ROOM ?? ""
  );
};

export const getSSAudioEnable = () => {
  return window.sessionStorage.getItem(
    process.env.REACT_APP_AUDIO_ENABLE ?? ""
  );
};

export const removeSSAudioEnable = () => {
  window.sessionStorage.removeItem(process.env.REACT_APP_AUDIO_ENABLE ?? "");
};

export const setSSAudioEnable = (value: string) => {
  window.sessionStorage.setItem(
    process.env.REACT_APP_AUDIO_ENABLE ?? "",
    value
  );
};

export const setSSVideoEnable = (value: string) => {
  window.sessionStorage.setItem(
    process.env.REACT_APP_VIDEO_ENABLE ?? "",
    value
  );
};

export const getSSVideoEnable = () => {
  return window.sessionStorage.getItem(
    process.env.REACT_APP_VIDEO_ENABLE ?? ""
  );
};

export const removeSSVideoEnable = () => {
  window.sessionStorage.removeItem(process.env.REACT_APP_VIDEO_ENABLE ?? "");
};

export const clearSS = () => {
  window.sessionStorage.clear();
};
