import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import LogIn from "./components/LogIn";
import Btn from "./components/Btn";
import SignInForm from "./components/SignInForm";
// import FormSubmit from "./components/SignInForm";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/home" component={HomePage} />
          <Route exact path="/" component={Btn} />
          <Route exact path="/sign-in" component={SignInForm} />
          {/* <Route exact path="/submit" component={FormSubmit} /> */}
          <Route exact path="/login" component={LogIn} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
