import { COMMON } from "../../constants";
import { authGetData, authPostData } from "../../ultis/request";

export const getDetailUser = ({ id, setLoading, onSuccess }) => {
  const url = `http://localhost:8080/api/users/${id}`;
  console.log(url);
  authGetData({
    url,
    setLoading,
    onSuccess: (res) => {
      if (res) {
        onSuccess(res);
      }
    },
  });
};

export const updateProfileUser = ({ payload, setLoading, onSuccess }) => {
  const url = `http://localhost:8080/api/users/update-profile/${payload.id}`;
  authPostData({
    url,
    method: COMMON.METHOD_PUT,
    payload,
    setLoading,
    onSuccess: (res) => {
      if (res) {
        onSuccess(res);
      }
    },
  });
};
