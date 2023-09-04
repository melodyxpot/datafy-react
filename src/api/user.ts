import api from "../utils/api";

export const getData = () => {
  return api.get("/user").then(res => res.data.users);
};

export const loadUser = () => {
  return api
    .get("/auth")
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error("error", err);
      window.localStorage.clear();
      window.location.href = "/login";
    });
};
