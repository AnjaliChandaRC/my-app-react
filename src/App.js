import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import FormSubmit from "./components/FormSubmit";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/submit" component={FormSubmit} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
