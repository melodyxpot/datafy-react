import styled from "styled-components";

export const DropdownContainer = styled.div`
  position: relative;
  font-size: 12px;
  user-select: none;
  width: 80px;
  text-align: center;
`;

export const DropdownPicker = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #fff;
  padding: 0.2rem;
  border: 1px solid #eee;
  border-radius: 0.25rem;
  cursor: pointer;
  text-align: center;
`

export const DropdownBox = styled.div<{direct: 'bottom' | 'top'}>`
  text-align: center;
  position: absolute;
  ${({direct}) => direct === "bottom" ? `top: calc(100% + 0.3rem)` : `bottom: calc(100% + 0.3rem)`};
  width: 100%;
  padding: 0;
  border: 1px solid var(--border);
  border-radius: 0.25rem;
  box-shadow: 0 0 0.5rem 0 var(--border);
  cursor: pointer;
  z-index: 1;

  & li {
    list-style: none;
    display: block;
    width: 100%;
  }

  & li:hover {
    background: var(--border);
    border-radius: 10px;
    transition: ease-in-out .3s;
  }
`;