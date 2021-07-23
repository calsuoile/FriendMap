import React from "react";
import Link from "next/link";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  buttonco: {
    backgroundColor: "primary",
    color: "secondary",
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: 400,
    fontSize: "13px",
    margin: 14,
    "&:hover": {
      backgroundColor: "secondary",
      color: "primary"
    },
  },
}));

function ButtonConnexion(props) {
  const classes = useStyles();

  return (
    <div>
      <Link href="connection">
        <Button
          aria-label="connexion"
          variant="button"
          className={classes.buttonco}
        >
          Connection
        </Button>
      </Link>
    </div>
  );
}

export default ButtonConnexion;
