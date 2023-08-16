import { DEFAULT_SYSTEM_PROMPT } from "./const";

export const cleanSelectedConversation = (conversation: IConversation) => {
  // added model for each conversation (3/20/23)
  // added system prompt for each conversation (3/21/23)
  // added folders (3/23/23)

  let updatedConversation = conversation;

  return updatedConversation;
};

export const cleanConversationHistory = (history: IConversation[]) => {
  // added model for each conversation (3/20/23)
  // added system prompt for each conversation (3/21/23)
  // added folders (3/23/23)

  return history.reduce((acc: IConversation[], conversation) => {
    try {
      acc.push(conversation);
      return acc;
    } catch (error) {
      console.warn(
        `error while cleaning conversations' history. Removing culprit`,
        error
      );
    }
    return acc;
  }, []);
};
