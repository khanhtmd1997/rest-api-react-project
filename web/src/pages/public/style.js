import styled from "styled-components";
export const FormContainer = styled.div`
  align-items: center;
  background-color: #e9e9e9;
  background: url("https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  height: 100vh;
  place-items: center;

  .container {
    background-color: #e9e9e9;
    border-radius: 0.7rem;
    box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
      0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
    height: 420px;
    max-width: 675px;
    overflow: hidden;
    position: relative;
    width: 1200px;
  }

  @media screen and (max-width: 700px) {
    .container {
      max-width: 100%;
      width: 85%;
    }
  }

  .form {
    margin: 0 24px 0 24px;
    height: 100%;
  }
  .container-form .form-title {
    font-weight: bold;
    margin: 0;
    margin: 48px;
    text-align: center;
    text-transform: uppercase;
  }

  .container-form {
    height: 100%;
    position: absolute;
    top: 0;
    transition: all 0.6s ease-in-out;
  }

  .signin-form {
    left: 0;
    width: 50%;
    z-index: 2;
  }

  .container.right-panel-active .signin-form {
    transform: translateX(100%);
    display: none;
  }

  .signup-form {
    left: 0;
    opacity: 0;
    width: 50%;
    z-index: 1;
  }

  .container.right-panel-active .signup-form {
    animation: show 0.6s;
    opacity: 1;
    transform: translateX(100%);
    z-index: 5;
  }

  .container-overlay {
    height: 100%;
    left: 50%;
    overflow: hidden;
    position: absolute;
    top: 0;
    transition: transform 0.6s ease-in-out;
    width: 50%;
    z-index: 100;
  }

  .container.right-panel-active .container-overlay {
    transform: translateX(-100%);
  }

  .overlay {
    /* background-color: #008997; */
    background: url("https://res.cloudinary.com/dci1eujqw/image/upload/v1616769558/Codepen/waldemar-brandt-aThdSdgx0YM-unsplash_cnq4sb.jpg");
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    left: -100%;
    position: relative;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    width: 200%;
  }

  .container.right-panel-active .overlay {
    transform: translateX(50%);
  }

  .overlay__panel {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    position: absolute;
    text-align: center;
    top: 0;
    transform: translateX(0);
    transition: transform 0.6s ease-in-out;
    width: 50%;
  }

  .overlay--left {
    transform: translateX(-20%);
  }

  .container.right-panel-active .overlay--left {
    transform: translateX(0);
  }

  .overlay--right {
    right: 0;
    transform: translateX(0);
  }

  .container.right-panel-active .overlay--right {
    transform: translateX(20%);
  }

  .btn {
    background-color: #0367a6;
    background-image: linear-gradient(90deg, #0367a6 0%, #008997 74%);
    border-radius: 20px;
    border: 1px solid #0367a6;
    color: #e9e9e9;
    cursor: pointer;
    font-size: 0.8rem;
    font-weight: bold;
    letter-spacing: 0.1rem;
    padding: 0.9rem 4rem;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
    height: auto;
  }

  .ant-form-item {
    margin-bottom: 8px;
  }

  input,
  .ant-input-affix-wrapper {
    padding: 12px;
  }

  .container-form .btn {
    display: flex;
    align-items: center;
    margin: 0 auto;
  }

  .button-submit {
    margin-top: 36px;
  }

  .btn:active {
    transform: scale(0.95);
  }

  .btn:focus {
    outline: none;
  }

  @keyframes show {
    0%,
    49.99% {
      opacity: 0;
      z-index: 1;
    }

    50%,
    100% {
      opacity: 1;
      z-index: 5;
    }
  }
`;
// export const Container = styled.div`
//   .wrapper {
//     max-width: 350px;
//     min-height: 450px;
//     margin: 30px auto;
//     padding: 20px 30px 30px 30px;
//     background-color: #ecf0f3;
//     border-radius: 15px;
//     box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff;
//     position: relative;
//   }

//   .logo {
//     width: 80px;
//     margin: auto;
//   }

//   .logo img {
//     width: 100%;
//     height: 80px;
//     margin-bottom: 24px;
//     // object-fit: cover;
//     // border-radius: 50%;
//     // box-shadow: 0px 0px 3px #5f5f5f, 0px 0px 0px 5px #ecf0f3,
//     //   8px 8px 15px #a7aaa7, -8px -8px 15px #fff;
//   }

//   .wrapper .name {
//     font-weight: 600;
//     font-size: 1.4rem;
//     letter-spacing: 1.3px;
//     padding-left: 10px;
//     color: #555;
//   }

//   .wrapper .form-field .ant-picker {
//     width: 100%;
//     border: unset;
//     outline: none;
//     background: none;
//     color: #ecf0f3;
//   }
//   .wrapper .form-field input {
//     width: 100%;
//     display: block;
//     // border: none;
//     // outline: none;
//     background: none;
//     // font-size: 1.2rem;
//     color: #666;
//     padding: 10px 15px 10px 10px;
//   }

//   .wrapper .form-field .icon svg {
//     width: 32px;
//     height: 16px;
//   }

//   .wrapper .form-field {
//     padding-left: 10px;
//     // margin-bottom: 20px;
//     border-radius: 4px;
//     box-shadow: inset 8px 8px 8px #cbced1, inset -8px -8px 8px #fff;
//     display: flex;
//     align-items: center;
//   }

//   .wrapper .form-field .fas {
//     color: #555;
//   }

//   .wrapper .btn {
//     box-shadow: none;
//     width: 100%;
//     height: 40px;
//     background-color: #03a9f4;
//     color: #fff;
//     border-radius: 25px;
//     box-shadow: 3px 3px 3px #b1b1b1, -3px -3px 3px #fff;
//     letter-spacing: 1.3px;
//   }

//   .wrapper .btn:hover {
//     background-color: #039be5;
//   }

//   .wrapper a {
//     text-decoration: none;
//     font-size: 0.8rem;
//     color: #03a9f4;
//   }

//   .wrapper a:hover {
//     color: #039be5;
//   }

//   .wrapper .form-bottom {
//     position: absolute;
//     bottom: 10px;
//     right: 30px;
//   }

//   .ant-form-item-explain-error {
//     margin-top: 4px;
//     margin-bottom: 4px;
//   }

//   @media (max-width: 380px) {
//     .wrapper {
//       margin: 30px 20px;
//       padding: 40px 15px 15px 15px;
//     }
//   }
// `;
