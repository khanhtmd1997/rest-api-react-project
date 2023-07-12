import { Button, Form, Modal, message } from "antd";
import LanguageComponent from "../common/changeLanguage";
import DropDownComponent from "../common/dropdown";
import { KeyOutlined, UserOutlined, WarningOutlined } from "@ant-design/icons";
import { useCallback, useState } from "react";
import ModalConfirmComponent from "../common/modalConfirm";
import ModalComponent from "../common/modal";
import { COMMON } from "../../constants";
import { Container } from "./style";
import ModalInfoComponent from "./modal";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { commonSelector, setChangedData } from "../../redux/common/reducer";
import { setDrawer } from "../../redux/drawer/reducer";
import EditProfileTemplate from "./modal/edit-profile";
import EditPasswordTemplate from "./modal/edit-password";
import { setUser, userSelector } from "../../redux/user/reducer";
import { updateProfileUser } from "../../services/user";

const getBase64 = (img, callback) => {
  const reader = new FileReader();
  reader.addEventListener("load", () => callback(reader.result));
  reader.readAsDataURL(img);
};
const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
};

export default function InfoComponent() {
  const [form] = Form.useForm();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [stepModal, setStepModal] = useState(COMMON.ONE);
  const [loading, setLoading] = useState(false);

  const { isChangeData } = useSelector(commonSelector);
  const { user } = useSelector(userSelector);
  const [imageUrl, setImageUrl] = useState(
    user.avatar !== "" ? user.avatar : "http://i.pravatar.cc/500?img=7"
  );
  console.log(12321231, user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //item dropdown
  const items = [
    {
      key: "1",
      label: (
        <Button type="link" onClick={() => handleOpenModal(1)}>
          My Profile
        </Button>
      ),
      icon: <UserOutlined />,
    },
    {
      key: "2",
      label: (
        <Button type="link" onClick={() => handleOpenModal(2)}>
          Change Password
        </Button>
      ),
      icon: <KeyOutlined />,
    },
    {
      key: "3",
      label: (
        <ModalConfirmComponent
          content="Do you want to logout now?"
          buttonText="Logout"
          onOk={() => handleLogout()}
          isIcon
          iconText="logout"
        />
      ),
      danger: true,
    },
  ];
  //end item dropdown

  //open modal set data
  const handleOpenModal = useCallback(
    (step) => {
      setIsOpenModal(!isOpenModal);
      setStepModal(step);
    },
    [isOpenModal]
  );
  //end open modal set data

  //close modal
  const handleCloseModal = useCallback(() => {
    if (isChangeData) {
      Modal.confirm({
        title: "Confirm",
        icon: <WarningOutlined />,
        content: "Data is change. You sure close it?",
        okText: "Yes",
        cancelText: "Close",
        onOk: () => {
          dispatch(setDrawer(false));
          dispatch(setChangedData(false));
          setIsOpenModal(false);
          setStepModal(COMMON.ZERO);
          form.setFieldsValue(user);
          return null;
        },
        onCancel: () => {},
      });
    } else {
      dispatch(setDrawer(false));
      dispatch(setChangedData(false));
      setIsOpenModal(false);
      setStepModal(COMMON.ZERO);
      form.setFieldsValue(user);
    }
  }, [dispatch, form, isChangeData, user]);
  //end close modal

  //submit form
  const handleSubmitForm = useCallback(
    (values) => {
      if (stepModal === COMMON.ONE) {
        const payload = {
          id: user._id,
          avatar: imageUrl,
          phone: values.phone ?? "",
          username: values.username,
          fullName: values.fullName ?? "",
          address: values.address ?? "",
        };
        updateProfileUser({
          payload,
          setLoading,
          onSuccess: (res) => {
            console.log(res);
            if (res && res.data) {
              localStorage.setItem("user", res.data);
              dispatch(setUser(res.data));
              handleCloseModal();
            }
          },
        });
        console.log("call api edit profile", values);
      } else console.log("call api edit password", values);
    },
    [dispatch, handleCloseModal, imageUrl, stepModal, user._id]
  );
  //end submit form

  //upload image
  const handleChangeImage = useCallback(
    (event) => {
      const isValid = beforeUpload(event.target.files[0]);
      if (isValid) {
        getBase64(event.target.files[0], (url) => {
          setImageUrl(url);
        });
      }
    },
    [setImageUrl]
  );
  //end upload image
  //render content form
  const contentForm = useCallback(() => {
    if (stepModal === COMMON.ONE) {
      return (
        <EditProfileTemplate
          handleChangeImage={handleChangeImage}
          imageUrl={imageUrl}
        />
      );
    } else return <EditPasswordTemplate />;
  }, [handleChangeImage, imageUrl, stepModal]);
  //end render content form

  //show popup
  const openModal = useCallback(() => {
    return (
      isOpenModal && (
        <ModalComponent
          title={stepModal === COMMON.ONE ? "Edit Profile" : "Edit My password"}
          openModal={isOpenModal}
          handleOk={handleOpenModal}
          handleCancel={handleCloseModal}
          isFooter={false}
        >
          <ModalInfoComponent
            stepModal={stepModal}
            form={form}
            loading={loading}
            handleSubmitForm={handleSubmitForm}
            handleCloseModal={handleCloseModal}
            data={user}
            initialValues={user}
          >
            {contentForm()}
          </ModalInfoComponent>
        </ModalComponent>
      )
    );
  }, [
    isOpenModal,
    stepModal,
    handleOpenModal,
    handleCloseModal,
    form,
    loading,
    handleSubmitForm,
    contentForm,
    user,
  ]);
  //end show popup

  //logout
  const handleLogout = () => {
    localStorage.removeItem(COMMON.TOKEN_NAME);
    dispatch(setUser(null));
    navigate("/login");
  };
  //end logout

  return (
    // <Container>
    <Container className="info">
      {user && user._id ? (
        <div className="fullname-info">
          <DropDownComponent title={user.fullName} items={items} />
        </div>
      ) : (
        <div className="fullname-info">
          <Button type="link" onClick={() => navigate("/login")}>
            Login
          </Button>
        </div>
      )}

      <LanguageComponent />
      {openModal()}
    </Container>

    // </Container>
  );
}
