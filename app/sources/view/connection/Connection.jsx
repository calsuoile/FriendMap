import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Login from "/sources/view/connection/components/Login";
import Register from "/sources/view/connection/components/Register";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    width: 600,
  },
}));

export default function Connection() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Login />
      <Register />
    </div>
  );
}
