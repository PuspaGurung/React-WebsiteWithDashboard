import React from "react";
import { Link } from "react-router-dom";

export const Tag = props => {
  const template = (
    <span
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
    </span>
  );
  return props.link ? <Link to={props.linkTo}>{template}</Link> : template;
};

export const firebaseLooper = snapshot => {
  const data = [];
  snapshot.forEach(childSnapshot => {
    data.push({
      ...childSnapshot.val(),
      id: childSnapshot.key
    });
  });
  return data;
};

export const reverseArray = actualArrray => {
  let reverseArray = [];
  for (let i = actualArrray.length - 1; i >= 0; i--) {
    reverseArray.push(actualArrray[i]);
  }
  return reverseArray;
};
