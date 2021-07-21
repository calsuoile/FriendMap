import { makeStyles } from "@material-ui/core";
import React from "react";
import ButtonConnexion from "./components/ButtonConnexion";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
  },
  title: {
    margin: "10px",
  },
  button: {
    margin: "10px",
  },
}));

function Header(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 className={classes.title}>FRIENDS MAP</h1>
      <ButtonConnexion className={classes.button} />
    </div>
  );
}

export default Header;
