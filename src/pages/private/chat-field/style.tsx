import { Flex } from "components/basic";
import { styled } from "styled-components";
import { GV } from "utils/style.util";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
`;

export const ChatContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0 0 2rem;
  overflow: hidden;
  @media (max-width: 601px) {
    padding: 0 0.3rem 2rem 0.3rem;
  }
`;

export const ChatInputContainer = styled(Flex)`
  justify-content: center;
  flex-direction: column;
  position: relative;
`;
