import React from "react";
import Accroche from "../sources/view/accroche/Accroche";
import MyCity from "../sources/view/myCity/MyCity";
import ListFriends from "../sources/view/listFriends/ListFriends";

export default function Home() {
  return (
    <div>
      <img src="/assets/mapWorld.png" />
      <Accroche />
      <MyCity />
      <ListFriends />
    </div>
  )
}
