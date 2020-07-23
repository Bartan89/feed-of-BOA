import React, { useState } from "react"
import Rating from "./Rating"

export default function Post(props) {
  return (
    <div>
      <span className="card m-2">
        <span className="card-body">
          <img src={props.img} />
          <h5 className="card-title text-dark">{props.name}</h5>
          <p className="card-text text-dark">
            <Rating rating={props.popularity} />
          </p>
          {props.toppings.map(x => (
            <span className="badge badge-pill badge-primary m-1">{x}</span>
          ))}
        </span>
      </span>
    </div>
  )
}
