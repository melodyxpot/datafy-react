import styled from "styled-components";

export const ConversationItem = styled.div<{ selected: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  transition: 0.3s;

  > span {
    flex: 1;
    white-space: nowrap;
    overflow: hidden;
  }

  ${({ selected }) =>
    selected
      ? "background: rgba(255, 255, 255, 0.2);"
      : "background: transparent;"}

  &:hover {
    ${({ selected }) => !selected && "background: rgba(255, 255, 255, 0.1);"}
  }
`;

export const ToolsContainer = styled.div<{ selected: boolean }>`
  align-items: center;
  gap: 0.5rem;

  ${({ selected }) => (selected ? "display: flex;" : "display: none;")}
`;
