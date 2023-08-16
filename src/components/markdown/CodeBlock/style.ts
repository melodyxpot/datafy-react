import styled from "styled-components";

export const CodeblockContainer = styled.div`
  position: relative;
  font-size: 16px;
  border-radius: 0.375rem;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.375rem 0.375rem;
  background-color: #8230ee;
  border-radius: 0.375rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  line-height: 1.7;
`;

export const RefButton = styled.button`
  display: flex;
  align-items: center;
  border-radius: 3px;
  background: none;
  padding: 0.125rem 0.5rem;
  font-size: 0.75rem;
  line-height: 1rem;
  color: #fff;
  &:focus {
    outline: none;
  }
`;

export const LangSpan = styled.span`
  color: #ffffff;
  font-size: 0.875rem;
  font-weight: 400;
`;
