import React from "react";
import { Link } from "react-router-dom";

const Errorpage = () => {
  return (
    <div>
      <h2>Opps</h2>
      <Link to="/">Go Back home</Link>
    </div>
  );
};

export default Errorpage;
