import { incrementCounter } from "../redux/actions/counterActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const dispatch = useDispatch();
  return (
    <main className="home-main">
      <button onClick={() => dispatch(incrementCounter())}>
        Push the button
      </button>
      <div className="link-wrapper">
        <Link to="/results">See the results</Link>
      </div>
    </main>
  );
};

export default HomePage;
