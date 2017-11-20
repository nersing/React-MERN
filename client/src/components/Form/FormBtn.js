import React from "react";

export const FormBtn = props =>
  <button {...props} style={{ textAlign: "center" }} className="btn btn-dark">
    {props.children}
  </button>;
