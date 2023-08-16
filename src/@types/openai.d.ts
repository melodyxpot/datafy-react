declare interface OpenAIModel {
  id: string;
  name: string;
}

declare enum OpenAIModelID {
  GPT_3_5 = "gpt-3.5-turbo",
  GPT_4 = "gpt-4"
}

// declare interface OpenAIModels: Record<OpenAIModelID, OpenAIModel> = {
//   [OpenAIModelID.GPT_3_5]: {
//     id: OpenAIModelID.GPT_3_5,
//     name: "Default (GPT-3.5)"
//   },
//   [OpenAIModelID.GPT_4]: {
//     id: OpenAIModelID.GPT_4,
//     name: "GPT-4"
//   }
// };

declare interface Message {
  role: Role;
  content: string;
}

declare type Role = "assistant" | "user";

declare interface ChatFolder {
  id: number;
  name: string;
}

// declare interface Conversation {
//   id: number;
//   name: string;
//   messages: Message[];
//   model: OpenAIModel;
//   prompt: string;
//   folderId: number;
//   index: LlamaIndex;
// }

declare interface ChatBody {
  model: OpenAIModel;
  messageInput: Message[];
}

declare interface KeyValuePair {
  key: string;
  value: any;
}

declare interface ErrorMessage {
  code: string | null;
  title: string;
  messageLines: string[];
}

declare interface LlamaIndex {
  indexName: string;
  indexType: string;
}

declare type ChatUrlType = {
  convers_id: string;
};
