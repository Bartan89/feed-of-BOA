import React, { useState } from "react";
import Rating from "./Rating";

export default function Post(props) {
  return (
    <div>
      <span class="card">
        <span class="card-body">
          <h5 class="card-title text-dark">{props.name}</h5>
          <p class="card-text text-dark">
            <Rating rating={props.popularity} />
          </p>
          {props.toppings.map((x) => (
            <span class="badge badge-pill badge-primary m-1">{x}</span>
          ))}
        </span>
      </span>
    </div>
  );
}
