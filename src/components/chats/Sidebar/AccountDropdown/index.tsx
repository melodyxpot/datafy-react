import React from "react";
import { ModalContainer, SettingSelectItem } from "./style";
import { Span } from "components/basic";
import { IconLogout } from "@tabler/icons-react";
import setAuthToken from "utils/setAuthToken";
import { useNavigate } from "react-router-dom";
import useStore from "useStore";

interface PropsType {
  open: boolean;
  setOpen: (param: boolean) => void;
}

const AccountDropDown: React.FC<PropsType> = ({ open, setOpen }) => {
  const navigate = useNavigate();
  const { update } = useStore();

  const handleLogout = () => {
    setAuthToken("");
    update({ user: null, isAuthenticated: false });
    navigate("/login");
  };

  return (
    <ModalContainer open={open}>
      <SettingSelectItem onClick={() => handleLogout()}>
        <IconLogout style={{ marginRight: "10px " }} /> Log Out
      </SettingSelectItem>
      <Span></Span>
    </ModalContainer>
  );
};

export default AccountDropDown;
