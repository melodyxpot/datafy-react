import { styled } from "styled-components";
import { GV } from "utils/style.util";

export const SidebarContainer = styled.div<{ isOpen?: boolean }>`
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: ${GV("sidebar-width")};
  height: 100vh;
  background: linear-gradient(180deg, #8230ee 0%, #5c80dd 100%), #2a3439;
  color: ${GV("white")};
  overflow: hidden;
  transition: ease 0.3s;
  z-index: 10;

  > div:first-child {
    border-bottom: 1px solid ${GV("white")};
  }

  @media (max-width: 601px) {
    position: fixed;
    ${({ isOpen }) =>
      isOpen
        ? `
            width: ${GV("sidebar-width")};
        `
        : "width: 0"}
  }
`;

export const HamburgerContainer = styled.div<{ isOpen?: boolean }>`
  align-self: flex-end;

  ${({ isOpen }) =>
    !isOpen
      ? `
        align-self: center;
    `
      : ""}
`;

export const Hamburger = styled.span<{ isOpen?: boolean }>`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  z-index: 9000;
  transition: all ease-in-out 0.3s;
  cursor: pointer;

  span,
  &:after,
  &:before {
    position: absolute;
    left: 0;
    display: inline-block;
    width: 100%;
    height: 2px;
    background: ${GV("white")};
    border-radius: 1rem;
    transition: all ease-in-out 0.3s;
    content: "";
  }

  span {
    top: 50%;
    transform: translate(0, -50%);
  }

  &:after {
    top: 10%;
  }

  &:before {
    bottom: 10%;
  }

  ${({ isOpen }) =>
    isOpen
      ? `
        span,
        &:after,
        &:before {
            background: ${GV("bg")};
        }

        &:before {
            transform: translate3d(0,-11px,0) rotate(-225deg);
        }

        & span {
            transform: rotate(0deg) translateZ(0);
            opacity: 0;
        }

        &:after {
            transform: translate3d(0,11px,0) rotate(225deg);
        }
    `
      : ""}
  @media (min-width: 601px) {
    display: none;
  }
`;

export const NewChatButton = styled.button`
  border-radius: 5px;
  border: 1px solid #fff;
  padding: 0.8rem 1rem;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  transition: 0.5s;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const BottomNavContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  transition: 0.3s;
  position: relative;
  border-top: 1px solid #fff;
  padding: 1rem 0;
`;

export const BottomNavItem = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  gap: 1rem;
  width: 100%;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  transition: 0.3s;
  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

export const Avatar = styled.div<{ bg?: string }>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background: ${({ bg }) => bg ?? "transparent"};
  border-radius: 50%;
  color: ${GV("color")};
`;
