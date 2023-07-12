import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;
  background: #ecf0f3;
  padding: 4px;
  .info {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .fullname-info {
    margin-right: 8px;
    margin-left: 8px;
  }
`;

export const ContainerAvatar = styled.div`

.avatar-upload {
    position: relative;
    .avatar-edit {
        position: absolute;
        left: 48px;
        z-index: 1;
        top: -4px;
        input {
            display: none;
            + label {
                display: inline-block;
                width: 16px;
                height: 16px;
                margin-bottom: 0;
                border-radius: 100%;
                cursor: pointer;
                font-weight: normal;
                transition: all .2s ease-in-out;
                
            }
        }
    }
    .avatar-preview {
        width: 64px;
        height: 64px;
        position: relative;
        border-radius: 100%;
        border: 6px solid #F8F8F8;
        box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.1);
        text-align: center;
        > div {
            width: 100%;
            height: 100%;
            border-radius: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
    }
`;
