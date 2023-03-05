import React from "react";
import { getLikes } from "#api";
import { Button } from "../../components";

const Home = () => {
  getLikes(1);
  return (
    <div>
      <Button />
      Home
    </div>
  );
};

export default Home;
