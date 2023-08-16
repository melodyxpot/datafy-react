import React, { useState } from "react";
import { Flex, Heading } from "components/basic";
import {
  LoginButton,
  LoginForm,
  LoginFormContainer,
  LoginHead,
  LoginInfo,
  BGVector1,
  BGVector2,
  BGVector3,
  MobileLogo
} from "./style";
import LoginImageAsset from "assets/images/login-logo.png";
import LoginBGVector1Asset from "assets/images/login-bg-vec1.png";
import LoginBGVector2Asset from "assets/images/login-bg-vec2.png";
import LoginBGVector3Asset from "assets/images/login-bg-vec3.png";
import { Checkbox, Input } from "components/custom";
import { Link, useNavigate } from "react-router-dom";
import useStore from "useStore";
import { AxiosError, AxiosResponse } from "axios";
import api from "utils/api";
import setAuthToken from "utils/setAuthToken";

interface ILoginState {
  email: string;
  password: string;
}

interface ILoginError {
  email: string;
  password: string;
}

export default function index() {
  const [state, setState] = useState<ILoginState>({
    email: "",
    password: ""
  });
  const [formError, setFormError] = useState<ILoginError>({
    email: "",
    password: ""
  });
  const [remember, setRemember] = useState<boolean>(false);
  const { update } = useStore();
  const navigate = useNavigate();

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) =>
    setState({ ...state, [e.currentTarget.name]: e.currentTarget.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;
    if (state.email === "") {
      setFormError({ ...formError, email: "Email is requried" });
      isValid = false;
    }
    if (state.password === "") {
      setFormError({ ...formError, password: "Password is required" });
      isValid = false;
    }
    if (!isValid) return;
    api
      .post("/auth/login", state)
      .then((res: AxiosResponse) => {
        setAuthToken(res.data.token);
        update({ user: res.data, isAuthenticated: true });
        navigate("/c/new-conversation");
      })
      .catch((err: AxiosError) => {
        if (err.response) {
          setFormError(err.response.data as ILoginError);
        }
        console.error(err);
      });
  };

  return (
    <Flex
      $style={{
        hAlign: "center",
        vAlign: "center",
        gap: "80px",
        w: "100%",
        h: "100vh"
      }}
    >
      <BGVector1 src={LoginBGVector1Asset} />
      <BGVector2 src={LoginBGVector2Asset} />
      <BGVector3 src={LoginBGVector3Asset} />
      <LoginFormContainer>
        <MobileLogo src={LoginImageAsset} />
        <LoginHead>
          <Heading level={2} $style={{ align: "center" }}>
            Welcome back
          </Heading>
          <LoginInfo>Welcome back! Please enter your details.</LoginInfo>
        </LoginHead>
        <LoginForm onSubmit={handleSubmit}>
          <Input
            label={"Email"}
            type={"email"}
            name={"email"}
            value={state.email}
            error={formError.email}
            placeholder={"Enter your email"}
            onChange={handleInputChange}
          />
          <Input
            label={"Password"}
            type={"password"}
            name={"password"}
            error={formError.password}
            value={state.password}
            placeholder={"Enter your Password"}
            onChange={handleInputChange}
          />
          <Flex
            $style={{
              hAlign: "space-between"
            }}
          >
            <Checkbox
              label="Remember for 30 days"
              isChecked={remember}
              onChange={(e: React.FormEvent<HTMLElement>) => {
                setRemember(!remember);
              }}
            />
            <Link
              to=""
              style={{
                color: "#76AAF8",
                fontSize: "14px"
              }}
            >
              Forgot Password
            </Link>
          </Flex>
          <LoginButton type="submit">Sign In</LoginButton>
        </LoginForm>
      </LoginFormContainer>
    </Flex>
  );
}
