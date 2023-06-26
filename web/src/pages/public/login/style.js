import styled from "styled-components";

export const Container = styled.div`
  .wrapper {
    max-width: 350px;
    min-height: 450px;
    margin: 30px auto;
    padding: 20px 30px 30px 30px;
    background-color: #ecf0f3;
    border-radius: 15px;
    box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff;
    position: relative;
  }

  .logo {
    width: 80px;
    margin: auto;
  }

  .logo img {
    width: 100%;
    height: 80px;
    margin-bottom: 24px;
    // object-fit: cover;
    // border-radius: 50%;
    // box-shadow: 0px 0px 3px #5f5f5f, 0px 0px 0px 5px #ecf0f3,
    //   8px 8px 15px #a7aaa7, -8px -8px 15px #fff;
  }

  .wrapper .name {
    font-weight: 600;
    font-size: 1.4rem;
    letter-spacing: 1.3px;
    padding-left: 10px;
    color: #555;
  }

  .wrapper .form-field .ant-picker {
    width: 100%;
    border: unset;
    outline: none;
    background: none;
    color: #ecf0f3;
  }
  .wrapper .form-field input {
    width: 100%;
    display: block;
    // border: none;
    // outline: none;
    background: none;
    // font-size: 1.2rem;
    color: #666;
    padding: 10px 15px 10px 10px;
  }

  .wrapper .form-field .icon svg {
    width: 32px;
    height: 16px;
  }

  .wrapper .form-field {
    padding-left: 10px;
    // margin-bottom: 20px;
    border-radius: 4px;
    box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff;
    display: flex;
    align-items: center;
  }

  .wrapper .form-field .fas {
    color: #555;
  }

  .wrapper .btn {
    box-shadow: none;
    width: 100%;
    height: 40px;
    background-color: #03a9f4;
    color: #fff;
    border-radius: 25px;
    box-shadow: 3px 3px 3px #b1b1b1, -3px -3px 3px #fff;
    letter-spacing: 1.3px;
  }

  .wrapper .btn:hover {
    background-color: #039be5;
  }

  .wrapper a {
    text-decoration: none;
    font-size: 0.8rem;
    color: #03a9f4;
  }

  .wrapper a:hover {
    color: #039be5;
  }

  .wrapper .form-bottom {
    position: absolute;
    bottom: 10px;
    right: 30px;
  }

  .ant-form-item-explain-error {
    margin-top: 4px;
    margin-bottom: 4px;
  }

  @media (max-width: 380px) {
    .wrapper {
      margin: 30px 20px;
      padding: 40px 15px 15px 15px;
    }
  }
`;
