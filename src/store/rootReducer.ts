import { combineReducers, Reducer } from "redux";

import { RootState } from "../utilities/types";
import messagesReducer from "./messages.slice";

export const rootReducer: Reducer<RootState> = combineReducers<RootState>({
  messagesState: messagesReducer,
});
