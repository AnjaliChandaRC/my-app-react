import React from "react";
import { withRouter } from "react-router-dom";

const Btn = ({ history }) => {
  const signinForm = (e) => {
    history.push("/sign-in");
  };

  const loginForm = (e) => {
    history.push("/login");
  };
  return (
    <>
      <div className="container flex-column d-flex align-items-center">
        <div className="mt-5">
          <button
            className="submit_btn me-4 border-black"
            onClick={(e) => signinForm(e)}
          >
            SignIn Form
          </button>
          <button
            className="submit_btn border-black"
            onClick={(e) => loginForm(e)}
          >
            LogIn Form
          </button>
        </div>
      </div>
    </>
  );
};

export default withRouter(Btn);
