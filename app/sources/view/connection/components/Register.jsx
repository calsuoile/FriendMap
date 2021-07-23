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
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import axios from "axios";
import { useRouter } from "next/router";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import * as yup from "yup";

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
    justifyContent: "center",
    width: "90%",
    height: "120vh",
    marginTop: 20,
    margin: "auto"
  },
  contain: {
    // opacity: 0.5,
    // "&:hover": {
    //   zIndex: 1,
    //   opacity: 1,
    // },
  },
  paper2: {
    margin: theme.spacing(5, 10),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "rgba(237, 162, 116, 1)",
  },
  form: {
    // width: "80%",
    marginTop: "50px",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "primary",
    color: "white",
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: 400,
    fontSize: "20px",
  },
  names: {
    display: "flex",
    size: "auto"
  },
  name: {
    marginRight: "10%",
  },
  ok: {
    fontFamily: "Open Sans Condensed, sans-serif",
    fontWeight: 400,
    fontSize: "20px",
  },
  dialog: {
    backgroundColor: "#F29F24",
    fontFamily: "Staatliches, cursive",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "70px",
  },
  alert: {
    fontFamily: "Open Sans Condensed, sans-serif",
    fontSize: "15px",
    marginTop: "20px",
  },
  title: {
    marginTop: "5%",
    color: "secondary",
    fontSize: "40px",
  },
  hr: {
    width: "50%",
    height: "3px",
    backgroundColor: "textfield",
    border: "none",
    marginTop: "5%",
    marginBottom: "10px",
  },
}));

const schema = yup.object().shape({
  email: yup
    .string()
    .email({ key: "email", msg: "Merci de saisir un email valide" })
    .required({ key: "email", msg: "Merci de saisir un email valide" }),
  password: yup
    .string()
    .required({ key: "password", msg: "Merci de saisir votre mot de passe" }),
  firstname: yup
    .string()
    .required({ key: "firstname", msg: "Merci de saisir votre prénom" }),
  lastname: yup
    .string()
    .required({ key: "lastname", msg: "Merci de saisir votre nom" }),
  city: yup
    .string()
    .required({ key: "city", msg: "Merci de saisir votre ville" }),
});

export default function Register() {
  const classes = useStyles();
  const [form, setForm] = useState({
    lastname: "",
    firstname: "",
    city: "",
    email: "",
    password: "",
  });

  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [errors, setErrors] = useState([]);

  const handleClick = async (e) => {
    e.preventDefault();

    schema
      .validate({ ...form, [e.target.name]: e.target.value })
      .then(async () => {
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}users`, form);
        router.push("/");
        setOpen(true);
      })
      .catch((err) => setErrors(err.errors));
  };

  const handleChange = (e) => {
    schema
      .validate({ ...form, [e.target.name]: e.target.value })
      .then(() => setErrors([]))
      .catch((err) => setErrors(err.errors));
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className={classes.root}>
      <Grid
        item
        component={Paper}
        elevation={10}
        square
        className={classes.contain}
      >
        <div className={classes.paper2}>
          <Avatar className={classes.avatar}>
            <SupervisorAccountIcon />
          </Avatar>
          <Typography className={classes.title} variant="h3">
            REGISTER
          </Typography>
          <hr className={classes.hr}></hr>
          <form className={classes.form} onSubmit={handleClick} noValidate>
            <div className={classes.names}>
              <TextField
                className={classes.name}
                value={form.lastname}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="lastname"
                label="Name"
                type="lastname"
                id="lastname"
                autoComplete="current-password"
                onChange={handleChange}
                error={errors.find((item) => item.key === "lastname")}
                helperText={errors.find((item) => item.key === "lastname")?.msg}
              />
              <TextField
                className={classes.fname}
                value={form.firstname}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="firstname"
                label="Firstname"
                type="firstname"
                id="firstname"
                autoComplete="current-password"
                onChange={handleChange}
                error={errors.find((item) => item.key === "firstname")}
                helperText={
                  errors.find((item) => item.key === "firstname")?.msg
                }
              />
            </div>
            <TextField
              className={classes.city}
              value={form.city}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="city"
              label="City"
              type="city"
              id="city"
              autoComplete=""
              onChange={handleChange}
              error={errors.find((item) => item.key === "city")}
              helperText={errors.find((item) => item.key === "city")?.msg}
            />
            <TextField
              value={form.email}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
              name="email"
              autoComplete="email"
              autoFocus
              type="email"
              onChange={handleChange}
              error={errors.find((item) => item.key === "email")}
              helperText={errors.find((item) => item.key === "email")?.msg}
            />
            <TextField
              value={form.password}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChange}
              error={errors.find((item) => item.key === "password")}
              helperText={errors.find((item) => item.key === "password")?.msg}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
            >
              Register
            </Button>
            <Dialog
              open={open}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title" className={classes.dialog}>
                {"SUCCESSFUL REGISTRATION"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText
                  id="alert-dialog-description"
                  className={classes.alert}
                >
                  Login to continue
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button
                  className={classes.ok}
                  onClick={() => setOpen(false)}
                  color="primary"
                  autoFocus
                >
                  <strong>Ok</strong>
                </Button>
              </DialogActions>
            </Dialog>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </div>
  );
}
