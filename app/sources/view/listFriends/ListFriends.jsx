import React, { useEffect, useState } from "react";
import SearchFriends from "./components/SearchFriends";
import axios from "axios";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  friend: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 'auto'
  },
  title: {
    color: "white"
  },
  card: {
    width: 300,
    display: "flex",
    justifyContent: "center",
    margin: 'auto'

  }
}));

export default function ListFriends() {
  const classes = useStyles();
  const [searchValue, setSearchValue] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}users`)
      .then((response) => response.data)
      .then((data) => {
        setUsers(data);
      });
  });

  //   // "nico, berlin",
  //   // "albert, mexico",
  //   // "max, berlin",
  //   // "françine, bangkok",
  //   // "gaspard, madrid",
  //   // "mathilde, manchester",

  function handleInput(e) {
    setSearchValue(e.target.value);
  }

  return (
    <div className={classes.root}>
      <div className={classes.friend}>
        <h1 className={classes.title}>Friends List</h1>
        <h2>Search a place and find your friends!</h2>
      </div>
      <Card className={classes.card}>
        <CardContent>
          <Typography
            color="textSecondary"
            gutterBottom
          >
            <SearchFriends
              searchValue={searchValue}
              handleInput={handleInput}
            />
            {users
              .filter((user) => user.city.includes(searchValue))
              .map((user, index) => (
                <div key={index}>
                  <p>
                    {user.firstname} {user.lastname}, {user.city}
                  </p>
                </div>
              ))}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
