import { Button, Form, Modal } from "antd";
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

const initData = {
  email: "khanh@gmail.com",
  fullName: "Nguyễn Văn Khánh",
};

export default function InfoComponent() {
  const [form] = Form.useForm();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [stepModal, setStepModal] = useState(COMMON.ONE);
  const [loading] = useState(false);
  const { isChangeData } = useSelector(commonSelector);
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
          form.setFieldsValue(initData);
          return null;
        },
        onCancel: () => {},
      });
    } else {
      dispatch(setDrawer(false));
      dispatch(setChangedData(false));
      setIsOpenModal(false);
      setStepModal(COMMON.ZERO);
      form.setFieldsValue(initData);
    }
  }, [dispatch, form, isChangeData]);
  //end close modal

  //submit form
  const handleSubmitForm = useCallback(
    (values) => {
      if (stepModal === COMMON.ONE) {
        console.log("call api edit profile", values);
      } else console.log("call api edit password", values);
    },
    [stepModal]
  );
  //end submit form

  //render content form
  const contentForm = useCallback(() => {
    if (stepModal === COMMON.ONE) {
      return <EditProfileTemplate />;
    } else return <EditPasswordTemplate />;
  }, [stepModal]);
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
            contentForm={contentForm}
            data={initData}
            initialValues={initData}
          />
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
  ]);
  //end show popup

  //logout
  const handleLogout = () => {
    navigate("/login");
  };
  //end logout

  return (
    // <Container>
    <Container className="info">
      {/* <Image width={32} height={32} className="image-info" /> */}
      <div className="fullname-info">
        <DropDownComponent title={"Nguyễn Văn Khánh"} items={items} />
      </div>
      <LanguageComponent />
      {openModal()}
    </Container>

    // </Container>
  );
}
