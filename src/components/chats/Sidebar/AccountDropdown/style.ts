import { styled } from "styled-components";
import { GV } from "utils/style.util";

export const ModalContainer = styled.div<{ open: boolean }>`
  position: absolute;
  transition: 0.5s;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${GV("white")};
  overflow: hidden;
  transition: ease 0.3s;
  border-radius: 5px;
  padding: 5px 0;
  text-align: center;
  align-items: center;
  background: #8230ee;

  ${({ open }) =>
    open
      ? "opacity: 1; bottom: 70px; z-index: 10"
      : "opacity: 0; bottom: 0; z-index: -1"}
`;

export const SettingSelectItem = styled.div`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: start;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: #a062f0;
  }
`;
