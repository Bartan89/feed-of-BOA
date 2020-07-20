import React from "react";

export default function Post(props) {
  return (
    <div>
      <p>{props.name}</p>
      <p>{props.popularity}</p>
      <p>{props.description === true ? "has cheese" : "no cheese"}</p>
    </div>
  );
}
