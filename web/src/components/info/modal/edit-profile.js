import { Col, Form, Image, Input, Row } from "antd";
import InputComponent from "../../common/input";
import { ContainerAvatar } from "../style";
import EditIcon from "../../../assets/img/edit.png";

export default function EditProfileTemplate(props) {
  const { handleChangeImage, imageUrl } = props;
  return (
    <Row gutter={24}>
      <Col span={24} sm={6}>
        <Form.Item name="avatar">
          <ContainerAvatar className="container">
            <div className="avatar-upload">
              <div className="avatar-edit">
                <Input
                  type="file"
                  id="imageUpload"
                  accept=".png, .jpg, .jpeg"
                  onChange={handleChangeImage}
                />
                <label for="imageUpload">
                  <Image preview={false} alt="" src={EditIcon} />
                </label>
              </div>
              <div className="avatar-preview">
                <div
                  id="imagePreview"
                  style={{
                    backgroundImage: `url(${imageUrl})`,
                  }}
                ></div>
              </div>
            </div>
          </ContainerAvatar>
        </Form.Item>
      </Col>
      <Col span={24} sm={18}>
        <Form.Item
          name="fullName"
          label="Full name"
          rules={[
            {
              required: true,
              message: "Không được bỏ trống",
            },
          ]}
        >
          <InputComponent />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item
          name="username"
          label="Username"
          rules={[
            {
              required: true,
              message: "Không được bỏ trống",
            },
          ]}
        >
          <Input placeholder="Enter username" />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item name="phone" label="Phone">
          <Input placeholder="Enter Phone" />
        </Form.Item>
      </Col>
      <Col span={24}>
        <Form.Item name="address" label="Address">
          <Input.TextArea placeholder="Enter address" rows="3" />
        </Form.Item>
      </Col>
    </Row>
  );
}
