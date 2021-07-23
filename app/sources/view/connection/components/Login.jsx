import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "next/link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import axios from "axios";
import { useRouter } from "next/router";

function Copyright() {
  return (
    <Typography variant="h7" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Charles-Hugo Vialle
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: 600,
    height: "100vh",
  },
  contain: {
    opacity: 0.5,
    "&:hover": {
      zIndex: 1,
      opacity: 1,
    },
  },
  paper: {
    margin: theme.spacing(10, 20),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "rgba(237, 162, 116, 1)",
  },
  form: {
    width: "80%",
    marginTop: "50px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#5C9A9A",
    color: "white",
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: 400,
    fontSize: "20px",
  },
  title: {
    marginTop: "5%",
    color: "#006262",
    fontSize: "40px",
  },
  hr: {
    width: "50%",
    height: "3px",
    backgroundColor: "#006262",
    border: "none",
    marginTop: "5%",
    marginBottom: "10px",
  },
}));

export default function Login() {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleClick = async (e) => {
    e.preventDefault();
    const userId = {
      email: email,
      password: password,
    };
    try {
      const token = await axios.post(
        `http://localhost:3030/users/login`,
        userId
      );
      console.log(token.data);
      const userProfile = await axios.get(
        `http://localhost:3030/users/me`,
        config
      );
      router.push("/");
    } catch (error) {
      ("identifiants incorrectes");
    }
  };

  return (
    <div className={classes.root}>
      <Grid
        item
        component={Paper}
        elevation={6}
        square
        className={classes.contain}
      >
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <AccountCircleIcon />
          </Avatar>
          <Typography className={classes.title} variant="h3">
            CONNEXION
          </Typography>
          <hr className={classes.hr}></hr>
          <form className={classes.form} noValidate>
            <TextField
              value={email}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              value={password}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="Mot de passe"
              label="Mot de passe"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleClick}
            >
              CONNEXION
            </Button>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </div>
  );
}
