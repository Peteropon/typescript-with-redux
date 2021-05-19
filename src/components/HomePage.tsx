import { incrementCounter } from "../redux/actions/counterActions";
import { Link } from "react-router-dom";
import { useAppDispatch } from "../hooks";

const HomePage = () => {
  const dispatch = useAppDispatch();
  return (
    <main className="home-main">
      <button onClick={() => dispatch(incrementCounter())}>
        Push the button
      </button>
      <div className="link-wrapper">
        <Link className="link" to="/results">
          See the results
        </Link>
      </div>
    </main>
  );
};

export default HomePage;
