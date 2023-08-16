declare type LanguageKeyType = "en-US";
declare interface IConversation {
  id: string;
  title: string;
  messages: Message[];
}
declare interface UserObject {
  token?: string;
  user?: any;
}

declare interface StoreObject {
  lang: LanguageKeyType;
  theme: "dark" | "light";
  user: UserObject | null;
  isChat: boolean;
  isMobileNav: boolean;
  cookie: string | null;
  conversation: IConversation[];
  isAuthenticated: boolean;
}
