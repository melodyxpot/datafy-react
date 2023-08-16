import { styled } from "styled-components";
import { GV } from "utils/style.util";

export const ChatInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 812px;
  margin: 0 auto;
  padding: 0.5rem 1rem;
  border: 1px solid ${GV("border")};
  border-radius: 8px;
  box-shadow: 0px -12px 30px -6px rgba(217, 217, 217, 0.68);
`;

export const InputItem = styled.input`
  background: transparent;
  border: none;
  outline: none;
  padding: 0.5rem 0;
`;

export const SendButton = styled.div`
  padding: 8px;
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  border-radius: 50%;
  background: transparent;
  &:hover {
    background: #eeeeee;
  }
`;

export const DropdownButton = styled.button`
  background: #fff;
  font-size: 12px;
  padding: 0.25rem;
  border-radius: 0.25rem;
  text-align: left;
  &:hover {
    background: #dbdbdb;
  }
`;

export const ChatEraser = styled.button`
  background: #fff;
  font-size: 12px;
  padding: 0.25rem;
  border-radius: 0.25rem;
  display: inline-flex;
  align-items: center;
  &:hover {
    background: #dbdbdb;
  }
`;
