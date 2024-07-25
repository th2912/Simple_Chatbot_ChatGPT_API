import {
  Avatar,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useRef, useEffect, useLayoutEffect } from "react";
import { makeStyles } from "tss-react/mui";
import PerfectScrollbar from "react-perfect-scrollbar";
import { Message } from "../utilities/types";
import logo from "../assets/doge.png";

const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    maxWidth: "80%",
    margin: "auto",
    backgroundColor: theme.palette.background.paper,
    borderRadius: 10,
    padding: theme.spacing(1),
    overflow: "auto",
    maxHeight: 400,
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
    marginBottom: theme.spacing(2),
  },
  messageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginBottom: theme.spacing(1),
    marginRight: theme.spacing(10),
    // marginLeft: theme.spacing(2),
  },
  otherMessageContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginBottom: theme.spacing(1),
    marginLeft: theme.spacing(10),
  },
  sender: {
    fontWeight: "bold",
    fontSize: "0.9rem",
    marginBottom: theme.spacing(0.5),
  },
}));
export interface Props {
  messages: Message[];
}

export const ChatMessages: React.FC<Props> = ({ messages }) => {
  const { classes } = useStyles();
  const scrollRef = useRef<HTMLDivElement>();
  useLayoutEffect(() => {
    if (scrollRef?.current) {
      scrollRef.current.scrollIntoView();
    }
  });

  return (
    <PerfectScrollbar style={{ maxHeight: "calc(100vh - 170px)" }}>
      <Box>
        {messages.map((message) => (
          <Box
            key={message.id}
            className={
              message.author === "me"
                ? classes.otherMessageContainer
                : classes.messageContainer
            }
            ref={scrollRef}
          >
            <Box
              className={classes.root}
              bgcolor={message.author === "GPT" ? "#f5f5f5" : "#dcf8c6"}
            >
              <ListItem alignItems="flex-start">
                <ListItemAvatar>
                  <Avatar
                    alt={message.author}
                    src={message.author === "me" ? "" : logo}
                  />
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <span className={classes.sender}>{message.author}</span>
                  }
                  secondary={message.content}
                />
              </ListItem>
            </Box>
          </Box>
        ))}
      </Box>
    </PerfectScrollbar>
  );
};
