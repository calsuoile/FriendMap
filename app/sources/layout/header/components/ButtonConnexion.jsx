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
    // [theme.breakpoints.down("sm")]: {
    //   width: "20px",
    //   fontSize: "10px",
    // },
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
          variant="contained"
          className={classes.buttonco}
        >
          Connection
        </Button>
      </Link>
    </div>
  );
}

export default ButtonConnexion;
