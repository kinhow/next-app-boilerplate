import React from "react";
import { css } from "../../styled-system/css";

const Home = () => {
  return (
    <div
      className={css({
        height: "svh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "3xl",
        fontWeight: "extrabold",
      })}
    >
      <p>BUILD YOUR PROJECT HERE...</p>
    </div>
  );
};

export default Home;
