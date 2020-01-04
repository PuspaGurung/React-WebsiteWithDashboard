import React from "react";
import { Link } from "react-router-dom";

export const Tag = props => {
  const template = (
    <div
      className={`${props.className ? props.className : ""}`}
      style={{
        background: props.background,
        fontSize: props.size,
        color: props.color,
        padding: "0.5rem 1rem",
        display: "inline-block",
        fontFamily: "inherit",
        ...props.add
      }}
    >
      {props.children}
    </div>
  );
  return props.link ? <Link to={props.linkTo}>{template}</Link> : template;
};
