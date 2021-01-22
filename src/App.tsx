import "./App.css";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ResultsPage from "./components/ResultsPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Route exact path="/" component={HomePage}></Route>
      <Route exact path="/results" component={ResultsPage}></Route>
    </div>
  );
}

export default App;
