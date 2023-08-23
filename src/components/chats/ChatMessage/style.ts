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
  align-items: center;
  margin: 25px auto;
  font-size: 0.9em;
  border-radius: 10px;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  text-align: center;
`;

export const MarkdownTH = styled.th`
  background: linear-gradient(180deg, #8230ee 0%, #5c80dd 100%), #2a3439;
  color: #ffffff;
  padding: 8px 10px;
  line-height: 1.3rem;
`;

export const MarkdownTR = styled.tr`
  background-color: #fff;
  border-radius: 10px;
`;

export const MarkdownTD = styled.td`
  padding: 12px 15px;
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
