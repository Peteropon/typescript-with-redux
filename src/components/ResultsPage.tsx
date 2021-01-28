import { connect } from "react-redux";
import { CounterState } from "../redux/types";
import { Link } from "react-router-dom";

type Props = CounterState;

const ResultsPage = ({ counter }: Props) => {
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
        <Link to="/">Back to home</Link>
      </div>
    </main>
  );
};

function mapStateToProps(state: CounterState) {
  return {
    counter: state.counter,
  };
}

export default connect(mapStateToProps)(ResultsPage);
