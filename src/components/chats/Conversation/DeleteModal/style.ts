import styled from "styled-components";

export const ModalContainer = styled.div<{ open: boolean }>`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  justify-content: center;
  align-items: center;
  z-index: 1;
  overflow: auto;
  transition: 0.3s;
  cursor: default;
  display: flex;
  ${({ open }) =>
    open
      ? "visibility: visible; opacity: 1;"
      : "visibility: hidden; opacity: 0"}
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  border-radius: 5px;
  padding: 10px;
  width: 350px;
  background: linear-gradient(180deg, #8230ee 0%, #5c80dd 100%), #2a3439;
  transition: 500ms;
`;

export const DeleteButton = styled.button`
  width: 90px;
  height: 40px;
  background: #751313;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 0%.8;
  font-weight: 600;
  cursor: pointer;
  margin-left: 5px;
`;

export const CancelButton = styled.button`
  width: 90px;
  height: 40px;
  background: #2a3439;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 0%.8;
  font-weight: 600;
  cursor: pointer;
`;
