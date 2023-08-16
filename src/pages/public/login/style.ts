import { styled } from "styled-components";

export const BGVector1 = styled.img`
  position: fixed;
  width: 800;
  top: 0;
  left: 0;
  @media only screen and (max-width: 601px) {
    display: none;
  }
  @media only screen and (max-width: 601px) {
    display: none;
  }
`;

export const BGVector2 = styled.img`
  position: fixed;
  width: 800;
  bottom: 0;
  left: 0;

  @media only screen and (max-width: 601px) {
    display: none;
  }
  @media only screen and (max-width: 601px) {
    display: none;
  }
`;

export const BGVector3 = styled.img`
  position: fixed;
  width: 800;
  bottom: 0;
  right: 0;

  @media only screen and (max-width: 601px) {
    display: none;
  }
  @media only screen and (max-width: 601px) {
    display: none;
  }
`;

export const LoginFormContainer = styled.div`
  display: inline-flex;
  padding: 110px 80px 159px 80px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 40px;
  z-index: 5;
  user-select: none;
`;

export const MobileLogo = styled.img`
  display: none;
  @media only screen and (max-width: 601px) {
    display: flex;
    width: 150px;
    height: 150px;
  }
`;

export const LoginHead = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
`;

export const LoginInfo = styled.p`
  color: var(--2nd-text, #808080);
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 0.16px;
  text-align: center;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LoginButton = styled.button`
  text-align: center;
  width: 100%;
  border-radius: 8px;
  background: linear-gradient(132deg, #8230ee 0%, #01bffd 100%, #5c80dd 100%);
  display: flex;
  width: 360px;
  padding: 13px 0px;
  justify-content: center;
  align-items: center;
  color: #fff;
`;
