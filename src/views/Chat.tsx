import React, {
  useMemo,
  useEffect,
  useState,
  useCallback,
  ChangeEvent,
} from "react";

import { useSelector, useDispatch } from "react-redux";

import { Nav } from "../components/Nav";
import { Sidebar } from "../components/Sidebar";
import { ChatMessages } from "../components/ChatMessages";
import { addMessage, sendMessage, sendMsgToApi } from "../store/messages.slice";
import { RootState, Message } from "../utilities/types";
import Button, { Box, Grid } from "@mui/material";
import { ChatBox } from "../components/ChatBox";
import { useAppDispatch, useAppSelector } from "../store/index";
import { nanoid } from "@reduxjs/toolkit";

export const Chat: React.FC = () => {
  const dispatch = useAppDispatch();
  const [messageInput, setMessageInput] = useState("");

  const { messages, loading, errorMsg } = useAppSelector(
    (state: RootState) => state.messagesState
  );

  useEffect(() => {
    console.log("object :>> ", messages, loading);
  }, [messages, loading]);

  const handleSendMsg = (msg: string) => {
    console.log("sent :>> ", msg);
    dispatch(
      addMessage({
        id: `${nanoid}`,
        content: msg,
        author: "me",
      })
    );
    dispatch(sendMsgToApi(msg));
  };

  return (
    <Box display={"flex"} flexDirection={"column"} height={"100vh"}>
      <Nav />
      <Box display={"flex"} height={"100%"}>
        <Sidebar />
        <Box
          width={"100%"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
          padding={(theme) => theme.spacing(2, 2)}
        >
          <ChatMessages messages={messages} />
          <ChatBox onSendMsg={handleSendMsg} />
        </Box>
      </Box>
    </Box>
  );
};
