import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Input } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 40,
  },
  title: {
    display: "flex",
    justifyContent: "center",
    color: "primary",
    marginBottom: 30
  },
  input: {
    display: "flex",
    justifyContent: "center",
    zIndex: 0,
  },
  buttonedition: {
    display: "flex",
    alignItems: "center",
  },
}));

function MyCity(props) {
  const classes = useStyles();
  const [form, setForm] = useState({
    city: "",
  });

  const [edition, setEdition] = useState(false);

  // const postForm = () => {
  //   setForm();
  // }

  const handleChangeEdit = (e) => {
    setForm((oldValues) => ({ ...oldValues, [e.target.name]: e.target.value }));
  };

  const handleChange = (e) => {
    setForm({ city: e.target.value });
  };

  const handleClick = (e) => {
    console.log(form);
    setForm({ city: e.target.value });
  };

  const handleEdition = () => {
    setEdition(true);
  };

  return (
    <div className={classes.root}>
      <h3 className={classes.title}>My City: {form.city} </h3>
      {!edition ? (
        <div className={classes.input}>
          <Input
            size="20px"
            placeholder="My city"
            value={form.city}
            name="city"
            onChange={handleChange}
          ></Input>
          <Button onClick={handleClick} >
            Submit
          </Button>
        </div>
      ) : (
        <div className={classes.edition}>
          <Input
            size="20px"
            fullWidth={true}
            placeholder="My city"
            name="city"
            value={form.city}
            onChange={handleChangeEdit}
          ></Input>
          <Button onClick={handleClick} variant="contained">
            Submit
          </Button>
        </div>
      )}
      {/* <Button
        className={classes.buttonedition}
        onClick={handleEdition}
        variant="contained"
      >
        Edit
      </Button> */}
    </div>
  );
}

export default MyCity;
