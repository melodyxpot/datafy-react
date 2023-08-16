import { Icon, Span } from "components/basic";
import React, { useState } from "react";
import { ConversationItem, ToolsContainer } from "./style";
import { useNavigate, useParams } from "react-router-dom";

interface PropsType {
  conversation: IConversation;
  onDelete: (id: string) => void;
}

const Conversation: React.FC<PropsType> = ({ conversation, onDelete }) => {
  const [deleteState, setDeleteState] = useState<boolean>(false);
  const navigate = useNavigate();
  const params = useParams<ChatUrlType>();

  const handleOpenChat = () => {
    navigate(`/c/${conversation.id}`);
  };

  return (
    <ConversationItem
      selected={params.convers_id === conversation.id}
      onClick={() => handleOpenChat()}
    >
      <Icon icon="Chat" />
      <Span>{conversation.title}</Span>
      <ToolsContainer selected={params.convers_id === conversation.id}>
        {deleteState ? (
          <>
            <button onClick={() => onDelete(conversation.id)}>
              <Icon icon="Check" />
            </button>
            <button onClick={() => setDeleteState(false)}>
              <Icon icon="Close" />
            </button>
          </>
        ) : (
          <button
            style={{ display: "flex", alignItems: "center" }}
            onClick={() => setDeleteState(true)}
          >
            <Icon icon="Trash" />
          </button>
        )}
      </ToolsContainer>
    </ConversationItem>
  );
};

export default Conversation;
