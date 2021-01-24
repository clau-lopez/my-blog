import React from "react";
import Board from "./Board";
import Profile from "./Profile";
import TagFilter from "./TagFilter";

const Home = () => {
  return (
    <>
      <h1> Soy el Home </h1>
      <Profile />
      <TagFilter />
      <Board />
    </>
  );
};
export default Home;
