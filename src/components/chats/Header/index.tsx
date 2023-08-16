import React from "react";
import { HeaderContainer } from "./style";
import { Icon } from "components/basic";

interface PropsType {
  setSlideOpened: (p: boolean) => void;
  slideOpened: boolean;
}

const Header: React.FC<PropsType> = ({ setSlideOpened, slideOpened }) => {
  return (
    <HeaderContainer>
      <button onClick={() => setSlideOpened(!slideOpened)}>
        <Icon icon="Menu" />
      </button>
    </HeaderContainer>
  );
};

export default Header;
