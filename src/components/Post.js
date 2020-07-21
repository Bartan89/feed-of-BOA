import React from "react";

export default function Post(props) {
  return (
    <div class="card-body bg-light mb-3 text-dark">
      <h5 class="card-title">{props.name}</h5>
      <h4>{props.popularity}</h4>
      <p class="card-text">
        {props.description === true ? "has cheese" : "no cheese"}
      </p>
      <a href="#" class="btn btn-primary">
        Go somewhere
      </a>
    </div>
  );
}
