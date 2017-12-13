import React from "react";

export const ListItem = props => (
  <li className="list-group-item">
    <h3>{props.title}</h3>
    <a rel="noreferrer noopener" target="_blank" href={props.url}></a>
  </li>
);