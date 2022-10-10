import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

const Btn = ({ history }) => {
  // const signupValue = localStorage.getItem("value");

  // useEffect(() => {
  //   console.log("signupValu;;;;;;;;;;;e", signupValue);
  //   if (signupValue === "true") {
  //     history.push("/");
  //   }
  // }, [signupValue]);
  const signinForm = (e) => {
    history.push("/sign-in");
    // localStorage.setItem("value", "true");
    // // console.log("initialValue", initialValue);
    // history.push("/");
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
