import React from "react";
import { MaskContainer } from "./style";

interface PropsType {
  slideOpened: boolean;
  setSlideOpened: (p: boolean) => void;
}

const SidebarMask: React.FC<PropsType> = ({ slideOpened, setSlideOpened }) => {
  return (
    <MaskContainer onClick={() => setSlideOpened(false)} isopen={slideOpened}>
      index
    </MaskContainer>
  );
};

export default SidebarMask;
