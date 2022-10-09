import React from "react";
import { withRouter } from "react-router-dom";

const HomePage = ({ history }) => {
  const logoutBtn = (e) => {
    history.push("/sign-in");
  };
  return (
    <>
      <div>
        <button onClick={(e) => logoutBtn(e)}>Log Out</button>
      </div>
    </>
  );
};

export default withRouter(HomePage);
