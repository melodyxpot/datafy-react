import styled from "styled-components";

export const ChatMessageContainer = styled.div<{ role: Role }>`
  border-bottom-width: 1px;
  border-color: #000;
  color: rgb(31 41 55);

  ${({ role }) =>
    role === "assistant"
      ? "background-color: rgb(249 250 251);"
      : "background-color: #fff"}
`;

export const MessageContainer = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  font-size: 1rem; /* 16px */
  line-height: 1.5rem; /* 24px */
`;

export const EditContainer = styled.div`
  margin-top: 2.5rem;
  justify-content: center;
  margin-left: 1rem; /* 16px */
`;

export const MarkdownTable = styled.table`
  border-collapse: collapse;
  border: 1px;
  border-color: rgb(0 0 0);
  padding: 0.25rem 0.75rem;
`;

export const MarkdownTH = styled.th`
  border: 1px;
  border-color: #000;
  padding: 0.25rem 0.75rem;
  color: #fff;
  background-color: rgb(107 114 128);
  overflow-wrap: break-word;
`;

export const MarkdownTD = styled.td`
  border: 1px;
  border-color: #000;
  padding: 0.25rem 0.75rem;
  color: #fff;
  background-color: rgb(107 114 128);
  overflow-wrap: break-word;
`;

export const ChatItem = styled.div<{ role?: Role }>`
  padding: 1rem 1rem;
  line-height: 200%;
  ${({ role }) => (role === "user" ? "background: #F6FAFB;" : "")}
`;

export const ChatItemWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  justify-content: space-between;
`;
