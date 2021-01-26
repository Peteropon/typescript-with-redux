import React from "react";
import { incrementCounter } from "../redux/actions/counterActions";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <main>
      <button onClick={() => dispatch(incrementCounter())}>Click me</button>
    </main>
  );
};

export default HomePage;
