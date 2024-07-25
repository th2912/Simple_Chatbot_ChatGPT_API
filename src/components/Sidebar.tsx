import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { makeStyles } from "tss-react/mui";
import AddIcon from "@mui/icons-material/Add";
import TelegramIcon from "@mui/icons-material/Telegram";
const useStyles = makeStyles()((theme) => ({
  root: {
    display: "flex",
    width: "100%",
    backgroundColor: "#144272",
    alignItems: "center",
    flexDirection: "column",
    flex: "1 4 auto",
    padding: theme.spacing(2, 2),
    gap: theme.spacing(2),
  },
  logo: {
    display: "flex",
    gap: theme.spacing(2),
    "> img": {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  },
  chatBox: {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(2),
    width: "100%",
    backgroundColor: "#2C74B3",
    borderRadius: theme.spacing(0.5),
    padding: theme.spacing("5px", "15px"),
    ":hover": {
      opacity: "0.5",
      cursor: "pointer",
    },
  },
}));
export interface Props {
  // currentUser: User | null;
  // users: User[];
}

export const Sidebar: React.FC<Props> = ({}) => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Box width={"100%"}>
        <Button
          variant="outlined"
          fullWidth
          color="info"
          startIcon={<AddIcon />}
        >
          New Chat
        </Button>
      </Box>
      {[1, 2, 3].map((item) => (
        <Box className={classes.chatBox}>
          <TelegramIcon color="inherit" />
          <Typography
            component={"div"}
            width={"200px"}
            variant="subtitle1"
            noWrap
          >
            asdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasdasd
          </Typography>
        </Box>
      ))}
    </Box>
  );
};
