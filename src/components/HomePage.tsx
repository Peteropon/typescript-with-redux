import React from "react";
import { incrementCounter } from "../redux/actions/counterActions";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <main className="home-main">
      <button onClick={() => dispatch(incrementCounter())}>
        Push the button
      </button>
    </main>
  );
};

export default HomePage;
