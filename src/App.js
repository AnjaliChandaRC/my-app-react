import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import SubmitBtn from "./components/SubmitBtn";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Header} />
          <Route exact path="/submit" component={SubmitBtn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
