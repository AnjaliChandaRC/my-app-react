import React from "react";
import Btn from "./Btn";

const LogIn = () => {
  return (
    <>
      <div>
        <Btn />
      </div>
      <section className="min-vh-100 d-flex align-items-center">
        <div className="container flex-column d-flex align-items-center">
          <div className="mt-2 width_30">
            <input
              className="input_bg w-100"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="mt-3 width_30">
            <div className="position-relative">
              <div className="d-flex">
                <input
                  className="w-100 input_bg "
                  type="password"
                  placeholder="Password"
                />
                <div className="position-absolute eye_position cursor"></div>
              </div>
            </div>
          </div>
          <div className="mt-3 text-center">
            <button className="submit_btn">Submit Form</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogIn;
