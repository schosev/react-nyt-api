import React from "react";

export const ListItem = props => (
  <li className="list-group-item">
    <a rel="noreferrer noopener" target="_blank" href={props.url}>
      {props.title}
    </a>
    <p>Publish Date: {props.date} </p>
    <button {...props} style={{ marginBottom: 10 }} className="btn btn-success">
      {props.button}
      {props.children}
    </button>
  </li>
);

// str = str.substring(0,10);
