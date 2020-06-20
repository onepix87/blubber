const baseReqInit = {
  cache: "no-cache",
  headers: {
    "Content-Type": "application/json"
  },
  credentials: "same-origin"
};

const basePostInit = {
  ...baseReqInit,
  method: "POST",
  headers: { "X-CSRFToken": document.cookie.replace(/(?:(?:^|.*;\s*)csrftoken\s*=\s*([^;]*).*$)|^.*$/, "$1") }
};

export const recordsUrl = "/api/records/";
export const loginUrl = "/profile/login/";

export const getJsonRequest = async url => {
  const reqInit = { ...baseReqInit, method: "GET" };
  const res = await fetch(url, reqInit);
  return res.json();
};

export const postDataWithoutResponse = async (url, data) => {
  const reqInit = {
    ...basePostInit,
    body: data
  };
  await fetch(url, reqInit);
};

export const postDataWithResponse = async (url, data) => {
  const reqInit = {
    ...basePostInit,
    body: data
  };
  const res = await fetch(url, reqInit);
  return res.json();
};
