import React from "react";
import "./Jumbotron.css";


const Jumbotron = ({ children }) =>
  <div style={{ height: 210 }} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;