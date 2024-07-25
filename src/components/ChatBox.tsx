import {
  Avatar,
  Box,
  Button,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
  Typography,
} from "@mui/material";
import React, { ChangeEvent, HtmlHTMLAttributes, useState } from "react";
import { makeStyles } from "tss-react/mui";
import SendIcon from "@mui/icons-material/Send";
import { isEmpty } from "lodash";
const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    borderRadius: 10,
    padding: theme.spacing(1),
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
  },
  input: {
    flexGrow: 1,
    marginRight: theme.spacing(1),
    whiteSpace: "pre-wrap",
    wordWrap: "break-word",
    "& .MuiTextField-root": {},
  },
}));
export interface Props {
  // currentUser: User | null;
  // users: User[];
  onSendMsg: (msg: string) => void;
}

export const ChatBox: React.FC<Props> = ({ onSendMsg }) => {
  const { classes } = useStyles();
  const [message, setMessage] = useState<string>("");

  const handleSendMessage = () => {
    // handle sending message logic
    console.log("Message sent:", message);
    setMessage("");
    onSendMsg(message);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" && !isEmpty(message)) {
      onSendMsg(message);
    }
  };

  const handleChangeMessage = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("event.target.value", event.target.value);
    if (event.target.value[event.target.value.length - 1] === "\n") return;
    setMessage(event.target.value);
  };

  return (
    <Box className={classes.root}>
      <TextField
        className={classes.input}
        variant="outlined"
        placeholder="Type a message..."
        value={message}
        onChange={handleChangeMessage}
        onKeyPress={handleKeyPress}
        multiline
      />
      <IconButton onClick={handleSendMessage} disabled={!message}>
        <SendIcon color={message ? "primary" : "disabled"} />
      </IconButton>
    </Box>
  );
};
