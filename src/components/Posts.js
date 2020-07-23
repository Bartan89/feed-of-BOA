import React, { useState, useEffect } from "react"
import Post from "./Post"
import axios from "axios"
import ReactStars from "react-stars"

export default function Posts() {
  const [pizzas, set_pizzas] = useState([])

  const [sorted, sortedSet] = useState("name")

  useEffect(() => {
    async function fetchDataFromApi() {
      // Getting back data from the net, through the wire, air, and the ocean:
      const APIRaw = await axios.get("https://raw.githubusercontent.com/Bartan89/feed-of-BOA/master/src/data/pizza.json")

      set_pizzas(APIRaw.data)
    }
    fetchDataFromApi()
  }, [])

  let newSort
  if (sorted === "name") {
    newSort = pizzas.sort((a, b) => a.name.localeCompare(b.name))
  } else if (sorted === "worstToBest") {
    newSort = pizzas.sort((a, b) => a.popularity - b.popularity)
  } else if (sorted === "bestToWorst") {
    newSort = pizzas.sort((a, b) => b.popularity - a.popularity)
  } else if (sorted === "mostIngredients") {
    newSort = pizzas.sort((a, b) => b.toppings.length - a.toppings.length)
  } else if (sorted === "leastIngredients") {
    newSort = pizzas.sort((a, b) => a.toppings.length - b.toppings.length)
  }

  function SortPizzas(event) {
    sortedSet(event.target.value)
  }

  if (pizzas === undefined) {
    return (
      <div>
        <p>loading</p>
      </div>
    )
  } else {
    return (
      <div>
        <label htmlfor="cars">Sort by:</label>
        <select onChange={SortPizzas}>
          <option value="name">Name</option>
          <option value="worstToBest">Rating (lowest first)</option>
          <option value="bestToWorst">Rating (best first)</option>
          <option value="mostIngredients">Most ingredients</option>
          <option value="leastIngredients">Least ingredients</option>
        </select>
        {newSort.map(pizza => {
          return <Post name={pizza.name} base={pizza.base} sauce={pizza.sauce} cheese={pizza.cheese} toppings={pizza.toppings} popularity={pizza.popularity} />
        })}
      </div>
    )
  }
}
