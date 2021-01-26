import { connect } from "react-redux";
import { CounterState } from "../redux/types";

interface PropsFromState {
  counter: number;
}

type Props = PropsFromState;

const ResultsPage = ({ counter }: Props) => {
  return (
    <section>
      <p>
        Here are the results: <span>{counter}</span>
      </p>
    </section>
  );
};

function mapStateToProps(state: CounterState) {
  return {
    counter: state.counter,
  };
}

export default connect(mapStateToProps)(ResultsPage);
