import React from "react";
import Accroche from "../sources/view/accroche/Accroche";
import MyCity from "../sources/view/myCity/MyCity";
import ListFriends from "../sources/view/listFriends/ListFriends";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: "center",
    flexDirection: "column",
    margin: "auto",
    backgroundColor: "#63252c !important",
    width: "100%"
  },
  image : {
    marginTop: 90,
    marginBottom: 30,
    width: "80%",
    margin: "auto"
  },
})

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <img className={classes.image} src="/assets/mapWorld.png" />
      <Accroche className={classes.accroche} />
      <MyCity />
      <ListFriends />
    </div>
  )
}
