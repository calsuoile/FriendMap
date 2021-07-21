import React from "react";
import Link from "next/link";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonco: {
    backgroundColor: "#5C9A9A",
    color: "white",
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: 400,
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      width: "20px",
      fontSize: "10px",
    },
  },
}));

function ButtonConnexion(props) {
  const classes = useStyles();

  return (
    <div>
      <Link href="connexion">
        <Button
          aria-label="connexion"
          variant="contained"
          color="secondary"
          className={classes.buttonco}
        >
          Connection
        </Button>
      </Link>
    </div>
  );
}

export default ButtonConnexion;
