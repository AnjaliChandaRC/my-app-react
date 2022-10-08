import React, { useEffect, useState } from "react";
import { withRouter } from "react-router-dom";
import { EyeClose, EyeIcon } from "../common/Icons";
const Form = ({ history }) => {
  const signupValue = localStorage.getItem("value");
  const [initialValue, setInitialValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(false);
  const [showHidePassword, setShowHidePassword] = useState(false);
  const [showConfirmHidePassword, setShowConfirmHidePassword] = useState(false);
  const emailregex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  const usernameregex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/;
  const [changeState, setChangeState] = useState(false);

  useEffect(() => {
    // console.log("signupValu;;;;;;;;;;;e", signupValue);

    if (signupValue === "true") {
      history.push("/submit");
    }
  }, [signupValue]);
  const changeHandler = (e) => {
    setError(true);
    e.preventDefault();

    if (
      initialValue.firstName !== "" &&
      initialValue.lastName !== "" &&
      initialValue.email !== "" &&
      initialValue.password !== "" &&
      initialValue.confirmPassword !== "" &&
      usernameregex.test(initialValue.lastName) &&
      emailregex.test(initialValue.email) &&
      initialValue.password === initialValue.confirmPassword
    ) {
      setInitialValue({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      setError(false);
      console.log("initialValue", initialValue);
    }
    localStorage.setItem("value", true);
    console.log("initialValue", initialValue);
    history.push("/submit");
  };
  return (
    <>
      <section className="d-flex align-items-center min-vh-100">
        <div className="container flex-column d-flex justify-content-center align-items-center">
          <div>
            <input
              type="text"
              placeholder="First Name"
              value={initialValue.firstName}
              onChange={(e) =>
                setInitialValue({ ...initialValue, firstName: e.target.value })
              }
            />
            <p className="text-danger mb-0 fw-bold">
              {error && initialValue.firstName === ""
                ? "Name is Required"
                : initialValue !== ""}
            </p>
          </div>
          <div className="mt-2">
            <input
              type="text"
              placeholder="Last Name"
              value={initialValue.lastName}
              onChange={(e) =>
                setInitialValue({ ...initialValue, lastName: e.target.value })
              }
            />
            <p className="text-danger mb-0 fw-bold">
              {error && initialValue.username === "" ? (
                "Last Name is Required"
              ) : error &&
                usernameregex.test(initialValue.lastName) === false ? (
                <p className="text-danger fw-bold">Invalid lastName</p>
              ) : (
                initialValue.lastName !== "" && (
                  <p className="text-success fw-bold">Valid</p>
                )
              )}
              {/* {console.log("sdfgh", usernameregex.test)}{" "} */}
            </p>
          </div>
          <div className="mt-2">
            <input
              type="email"
              placeholder="Email"
              value={initialValue.email}
              onChange={(e) =>
                setInitialValue({ ...initialValue, email: e.target.value })
              }
            />
            {error && initialValue.email === "" ? (
              <p className="text-danger fw-bold">Email is required</p>
            ) : error && emailregex.test(initialValue.email) === false ? (
              <p className="text-danger fw-bold">Invalid email</p>
            ) : (
              ""
            )}
          </div>
          <div className="mt-2">
            <div className="position-relative">
              <div className="d-flex">
                <input
                  className="w-100 input_bg color_pink"
                  type={showHidePassword ? "text" : "password"}
                  placeholder="Password"
                  value={initialValue.password}
                  onChange={(e) =>
                    setInitialValue({
                      ...initialValue,
                      password: e.target.value,
                    })
                  }
                />
                <div
                  className="position-absolute eye_position cursor"
                  onClick={() => setShowHidePassword(!showHidePassword)}
                >
                  {showHidePassword ? <EyeIcon /> : <EyeClose />}
                </div>
              </div>
              <p className="text-danger mb-0 fw-bold">
                {error && initialValue.password === ""
                  ? "Password is Required"
                  : initialValue !== ""}
              </p>
            </div>
          </div>
          <div className="mt-2">
            <div className="mb-3 position-relative">
              <div className="d-flex">
                <input
                  className="w-100 input_bg color_pink"
                  type={showConfirmHidePassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={initialValue.confirmPassword}
                  onChange={(e) =>
                    setInitialValue({
                      ...initialValue,
                      confirmPassword: e.target.value,
                    })
                  }
                />
                <div
                  className="position-absolute eye_position cursor"
                  onClick={() =>
                    setShowConfirmHidePassword(!showConfirmHidePassword)
                  }
                >
                  {showConfirmHidePassword ? <EyeIcon /> : <EyeClose />}
                </div>
              </div>
              <p className="text-danger mb-0 fw-bold">
                {error && initialValue.confirmPassword === ""
                  ? "Confirm Password is Required"
                  : initialValue.confirmPassword === "" &&
                    initialValue.password === ""
                  ? ""
                  : initialValue.confirmPassword !== "" &&
                    initialValue.confirmPassword !== initialValue.password
                  ? "Password Does not match"
                  : ""}
              </p>
            </div>
          </div>
          <div className="mt-3 text-center">
            <button onClick={(e) => changeHandler(e)}>Submit Form</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default withRouter(Form);
