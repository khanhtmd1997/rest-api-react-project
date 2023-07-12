import { COMMON } from "../../constants";
import { postData } from "../../ultis/request";

export const login = ({ payload, setLoading, onSuccess }) => {
  const urlAPI = "http://localhost:8080/api/users";
  const url = urlAPI + "/login";
  postData({
    url: url,
    method: "POST",
    payload,
    setLoading,
    onSuccess: (res) => {
      if (res && res.statusCode === COMMON.STATUSCODE_200) {
        onSuccess(res);
      }
    },
  });
};

export const register = ({ payload, setLoading, onSuccess }) => {
  const urlAPI = "http://localhost:8080/api/users";
  const url = urlAPI + "/register";
  postData({
    url: url,
    method: "POST",
    payload,
    setLoading,
    onSuccess: (res) => {
      if (res && res.statusCode === COMMON.STATUSCODE_200) {
        onSuccess(res);
      }
    },
  });
};
