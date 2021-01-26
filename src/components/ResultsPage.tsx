import { connect } from "react-redux";
import { CounterState } from "../redux/types";

interface PropsFromState {
  counter: number;
}

type Props = PropsFromState;

const ResultsPage = ({ counter }: Props) => {
  return (
    <main className="results-main">
      <h3>The button has been pressed {counter} times!</h3>
    </main>
  );
};

function mapStateToProps(state: CounterState) {
  return {
    counter: state.counter,
  };
}

export default connect(mapStateToProps)(ResultsPage);
