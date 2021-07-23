import React from "react";

export default function SearchFriends(props) {

  const { searchValue, handleInput } = props;

  return (
    <div>
      <input
        value={searchValue}
        type="text"
        placeholder="Search here..."
        onChange={handleInput}
      />
    </div>
  );
};