import React from "react";
import logo from "../assets/doge.png";
import { Box, Typography } from "@mui/material";
import { makeStyles } from "tss-react/mui";
const useStyles = makeStyles()((theme) => ({
  root: {
    height: theme.spacing(8),
    display: "flex",
    width: "100%",
    backgroundColor: "#0A2647",
    alignItems: "center",
    padding: theme.spacing(2, 5),
    boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
  },
  logo: {
    display: "flex",
    gap: theme.spacing(2),
    "> img": {
      width: theme.spacing(5),
      height: theme.spacing(5),
    },
  },
}));

export interface Props {}

export const Nav: React.FC<Props> = () => {
  const { classes } = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.logo}>
        <img src={logo} alt="logo" />
        <Typography variant="h4" color={"white"}>
          Ask Doggo
        </Typography>
      </Box>
    </Box>
  );
};
