import { Modal, notification } from "antd";
import { Axios } from "axios";
import { COMMON, PATH } from "../constants";

notification.config({
  maxCount: 1,
  duration: 2,
});

Axios.interceptors.response.use(
  (response) => {
    // do something with the response data

    if (response && response.data.statusCode === COMMON.STATUSCODE_500) {
      notification.error({
        message: "Thông báo!",
        description: response.data.message,
      });
    }
    if (
      response &&
      response.data.statusCode === STATUSCODE_200 &&
      response.data.message
    ) {
      notification.success({
        message: "Thông báo!",
        description: response.data.message,
      });
    }
    return response;
  },
  (error) => {
    notification.config({
      maxCount: 1,
      duration: 4,
    });
    let mess = "";
    if (error?.response?.status === STATUSCODE_401) {
      window.location.href = PATH.LOGIN;
      localStorage.clear();
      return;
    }
    if (error && error.response) {
      mess = error.response.data.message;
      if (mess) {
        notification.error({
          message: "Thông báo!",
          description: (
            <p
              dangerouslySetInnerHTML={{
                __html: mess,
              }}
            />
          ),
        });
      }
    } else {
      notification.error({
        message: "Thông báo!",
        description: "Lỗi hệ thống",
        maxCount: 1,
      });
    }
    return error.response;
  }
);
//-----
//CALL API GET WITH NOT AUTH
async function defaultGet(endpoint) {
  return await Axios({
    method: COMMON.METHOD_GET,
    url: endpoint,
  });
}

export async function getData({ url, setLoading, onSuccess }) {
  setLoading(true);
  try {
    const res = await defaultGet(url);
    if (res && res.data) {
      onSuccess(res.data);
    }
  } catch (err) {
  } finally {
    setLoading(false);
  }
}
//-----

//-----
//CALL API GET WITH AUTH
export async function authGet(endpoint) {
  const token = localStorage.getItem(COMMON.TOKEN_NAME);
  return await Axios({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: COMMON.METHOD_GET,
    url: endpoint,
  });
}

export async function authGetData({ url, setLoading, onSuccess }) {
  setLoading(true);
  try {
    const res = await authGet(url);
    if (res && res.data) {
      onSuccess(res.data);
    }
  } catch (err) {
  } finally {
    setLoading(false);
  }
}
//-----

//---
async function defaultPost(endpoint, method, payload) {
  const body = {};
  Object.keys(payload).forEach((key) => {
    body[key] = payload[key];

    if (
      payload[key] ||
      typeof payload[key] === COMMON.TYPEOF_BOOLEAN ||
      typeof payload[key] === COMMON.TYPEOF_NUMBER
    ) {
      body[key] = payload[key];
    }
    return null;
  });
  return await Axios({
    headers: {},
    method: method,
    url: endpoint,
    data: body,
  });
}

export async function postData({
  url,
  payload,
  method = METHOD_POST,
  setLoading,
  onSuccess,
}) {
  setLoading(true);
  try {
    const res = await defaultPost(url, method, payload);
    if (res && res.data) {
      onSuccess(res.data);
    }
  } catch (err) {
  } finally {
    setLoading(false);
  }
}
//----

//-----
async function authDelete(endpoint) {
  const token = localStorage.getItem(COMMON.TOKEN_NAME);
  return await Axios({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: COMMON.METHOD_DELETE,
    url: endpoint,
  });
}

export async function startDelete({ url, setLoading, onSuccess }) {
  setLoading(true);
  try {
    const res = await authDelete(url);
    if (res && res.data) {
      onSuccess(res.data);
    }
  } catch (err) {
  } finally {
    setLoading(false);
  }
}

export function authDeleteData({
  url,
  setLoading,
  onSuccess,
  content = "Bạn có chắc chắn muốn xóa !",
  title = "Xác nhận",
}) {
  Modal.confirm({
    centered: true,
    title,
    content,
    onOk() {
      startDelete({ url, setLoading, onSuccess });
    },
    onCancel() {},
    okText: "Đồng ý",
    okButtonProps: { type: "danger" },
    cancelText: "Hủy",
  });
}
//-----

async function authPost(endpoint, method, payload) {
  const token = localStorage.getItem(COMMON.TOKEN_NAME);
  const body = {};
  Object.keys(payload).forEach((key) => {
    if (
      payload[key] ||
      typeof payload[key] === COMMON.TYPEOF_BOOLEAN ||
      typeof payload[key] === COMMON.TYPEOF_NUMBER
    ) {
      body[key] = payload[key];
    }
    return {};
  });
  return await Axios({
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method: method,
    url: endpoint,
    data: body,
  });
}
export async function authPostData({
  url,
  method,
  payload,
  setLoading,
  onSuccess,
}) {
  setLoading(true);
  try {
    const res = await authPost(url, method, payload);
    if (res && res.data) {
      onSuccess(res.data);
    }
  } catch (err) {
  } finally {
    setLoading(false);
  }
}
//-----

//get multi data
export async function authGetMultiplesRequest({
  endpoints,
  setLoading,
  onSuccess,
}) {
  setLoading(true);
  try {
    await Axios.all(endpoints.map((endpoint) => authGet(endpoint))).then(
      (data) => {
        if (data.length) {
          onSuccess(data);
        }
      }
    );
  } catch (err) {
  } finally {
    setLoading(false);
  }
}
//-----------

//download file
// function getFileName(response) {
//   let filename = "";
//   const disposition = response.headers["content-disposition"];
//   if (disposition && disposition.indexOf("filename") !== -1) {
//     const filenameRegex = /UTF-8(.*)/;
//     const matches = filenameRegex.exec(disposition);
//     if (matches != null && matches[1]) {
//       filename = decodeURIComponent(matches[1].replace(/['"]/g, ""));
//     }
//   }
//   return filename;
// }
// export async function downloadFile({ endpoint, setLoading }) {
//   setLoading(true);
//   const token = localStorage.getItem(TOKEN_NAME);
//   try {
//     const res = await Axios({
//       headers: {
//         Accept: "application/json",
//         Authorization: `Bearer ${token}`,
//       },
//       responseType: "blob",
//       method: "GET",
//       url: endpoint,
//     });

//     const fileName = getFileName(res);
//     if (res && res.data && res.status === 200) {
//       const url = window.URL.createObjectURL(new Blob([res.data]));
//       const link = document.createElement("a");
//       link.href = url;
//       link.setAttribute("download", fileName ? fileName : "template.xlsx");
//       document.body.appendChild(link);
//       link.click();
//     }
//     if (res && res.data && res.status === 422) {
//       return notification.error({
//         message: `Hãy nhập đủ điều kiện tìm kiếm`,
//       });
//     } else if (fileName === "") {
//       const resTypeText = await Axios({
//         headers: {
//           Accept: "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         method: "GET",
//         url: endpoint,
//       });
//       alertMessage(
//         "error",
//         "Thông báo",
//         res?.message || resTypeText?.data?.message || "Dữ liệu không tìm thấy"
//       );
//     }
//   } catch (err) {
//   } finally {
//     setLoading(false);
//   }
// }
//----
