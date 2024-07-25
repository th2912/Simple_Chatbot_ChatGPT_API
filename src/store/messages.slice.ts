import axios from "axios";
import {
  createSlice,
  PayloadAction,
  Dispatch,
  createAsyncThunk,
} from "@reduxjs/toolkit";

import { Message, MessagesState } from "../utilities/types";
import { OpenAPI } from "../service/OpenApi";
import { stat } from "fs";

const initialState: MessagesState = {
  messages: [],
  loading: "idle",
  errorMsg: null,
};

export const sendMsgToApi = createAsyncThunk(
  "messages/sendMsgToApi",
  async (msg: string) => {
    const chatGPTService = new OpenAPI();
    const response = await chatGPTService.getCompletion(msg);
    return response;
  }
);

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setMessages: (state, { payload }: PayloadAction<Message[]>) => {
      state.messages = payload;
    },
    addMessage: (state, { payload }: PayloadAction<Message>) => {
      state.messages.push(payload);
    },
    sendMessage: (state, { payload }: PayloadAction<any>) => {
      // Placeholder for own message
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(sendMsgToApi.pending, (state) => {
        state.loading = "loading";
        state.errorMsg = "null";
      })
      .addCase(sendMsgToApi.fulfilled, (state, action) => {
        state.loading = "idle";
        state.messages.push(action.payload);
      })
      .addCase(sendMsgToApi.rejected, (state) => {
        state.loading = "failed";
        state.errorMsg = "Oops! Something went wrong!";
      });
  },
});

export const { sendMessage, addMessage, setMessages } = messagesSlice.actions;
export default messagesSlice.reducer;

// Action
// export function getMessages() {
//   return async (dispatch: Dispatch, getState: () => {}) => {
//     dispatch(setLoading());

//     try {
//       const { data } = await axios("/api/messages");

//       dispatch(setMessages(data.messages));
//     } catch (e) {
//       // Not handling errors
//       console.log(e);
//     } finally {
//       dispatch(setLoadingComplete());
//     }
//   };
// }
