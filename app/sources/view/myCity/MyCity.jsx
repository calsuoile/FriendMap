import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Input } from "@material-ui/core/";

const useStyles = makeStyles((theme) => ({}));

function MyCity(props) {
  const classes = useStyles();
  const [form, setForm] = useState({
    city: "",
  });

  const [edition, setEdition] = useState(false);

  const handleChangeEdit = (e) => {
    setForm((oldValues) => ({ ...oldValues, [e.target.name]: e.target.value }));
  };

  const handleChange = (e) => {
    setForm({ city: e.target.value });
  };

  const handleSubmit = () => {
    console.log(form);
  };

  const handleEdition = () => {
    setEdition(true);
  };

  return (
    <div>
      <h3 className={classes.title}>My City:</h3>
      {!edition ? (
        <div className={classes.input}>
          <Input
            size="20px"
            placeholder="My city"
            value={form.city}
            name="city"
            onChange={handleChange}
          ></Input>
          <Button onClick={handleSubmit} variant="contained">Submit</Button>
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
          <Button onClick={handleSubmit} variant="contained">Submit</Button>
        </div>
      )}
      <Button className={classes.buttonedition} onClick={handleEdition} variant="contained">
        Edit
      </Button>
    </div>
  );
}

export default MyCity;
