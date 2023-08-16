import styled from "styled-components";

export const MaskContainer = styled.div<{ isOpen: boolean }>`
  width: 100%;
  height: 100vh;
  position: fixed;
  background: rgba(255, 255, 255, 0.13);
  backdrop-filter: blur(5.5px);
  top: 0;
  left: 0;
  transition: 0.5s;
  ${({ isOpen }) =>
    isOpen
      ? `
            display: block;
        `
      : "display: none"}
`;
