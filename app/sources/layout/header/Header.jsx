import { makeStyles } from "@material-ui/core";
import React from "react";
import ButtonConnexion from "./components/ButtonConnexion";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#63252c !important",
    color: "white",
    position : "fixed",
    marginTop : "auto",
    width: "100%",
    scrollbarColor: "black"
  },
  title: {
    marginLeft: 20,
    marginTop: 8
  },
  // button: {
  //   margin: "10px",
  // },
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
