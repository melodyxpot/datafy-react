import { styled } from "styled-components";

export const HeaderContainer = styled.div`
  @media only screen and (min-width: 601px) {
    display: none;
  }
  width: 100%;
  padding: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0px 1px 4px 0px rgba(0, 0, 0, 0.05);
`;
