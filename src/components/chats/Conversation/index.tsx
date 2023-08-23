import { Icon, Span } from "components/basic";
import React, { useState } from "react";
import { ConversationItem, ToolsContainer } from "./style";
import { useNavigate, useParams } from "react-router-dom";
import DeleteModal from "../DeleteModal";

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

  const handleDelete = () => {
    onDelete(conversation.id);
    setDeleteState(false);
  };

  return (
    <ConversationItem
      selected={params.convers_id === conversation.id}
      onClick={() => handleOpenChat()}
    >
      <DeleteModal
        title={`Delete - ${conversation.title}`}
        content={`Please confirm that you want to delete ${conversation.title}`}
        isOpen={deleteState}
        setIsOpen={setDeleteState}
        handleDelete={handleDelete}
      />
      <Icon icon="Chat" />
      <Span>{conversation.title}</Span>
      <ToolsContainer selected={params.convers_id === conversation.id}>
        <button
          style={{ display: "flex", alignItems: "center" }}
          onClick={() => setDeleteState(true)}
        >
          <Icon icon="Trash" />
        </button>
        {/* )} */}
      </ToolsContainer>
    </ConversationItem>
  );
};

export default Conversation;
