import React, { useState } from "react"

export default function Rating(props) {
  const calcRating = () => {
    let amountRating = props.rating

    let rating = []
    for (let index = 0; index < amountRating; index++) {
      rating.push("⭑")
    }

    for (let index = 0; index < 5 - amountRating; index++) {
      rating.push("☆")
    }

    return rating
  }

  return (
    <div>
      <span className="card-text text-dark">{calcRating()}</span>
    </div>
  )
}
