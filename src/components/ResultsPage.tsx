import { Link } from "react-router-dom";
import { useAppSelector } from "../hooks";

const ResultsPage = () => {
  const counter = useAppSelector((state) => state.counter);
  return (
    <main className="results-main">
      {counter === 0 ? (
        <h3>The button has not been pressed yet :(</h3>
      ) : (
        <h3>
          The button has been pressed {counter}{" "}
          {counter === 1 ? "time" : "times"}!
        </h3>
      )}
      <div className="link-wrapper">
        <Link className="link" to="/">
          Back to home
        </Link>
      </div>
    </main>
  );
};

export default ResultsPage;
