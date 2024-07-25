// =======================================================================================
// Messages
// =======================================================================================

export interface Message {
  id: string;
  content: string;
  author: string;
}

export interface MessagesState {
  messages: Message[];
  loading: "idle" | "loading" | "failed";
  errorMsg: string | null;
}

export interface RootState {
  messagesState: MessagesState;
}
