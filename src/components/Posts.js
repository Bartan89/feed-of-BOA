import React, { useState, useEffect } from "react";
import Post from "./Post";
import axios from "axios";

export default function Posts() {
  const [pizzas, set_pizzas] = useState();

  useEffect(() => {
    async function fetchDataFromApi() {
      // Getting back data from the net, through the wire, air, and the ocean:
      const APIRaw = await axios.get(
        "http://my-json-server.typicode.com/Bartan89/feed-of-BOA/pizzas"
      );

      set_pizzas(APIRaw.data);
    }
    fetchDataFromApi();
  });

  if (pizzas === undefined) {
    return (
      <div>
        <p>loading</p>
      </div>
    );
  } else {
    return (
      <div>
        {pizzas.map((pizza) => {
          return (
            <Post
              name={pizza.name}
              base={pizza.base}
              sauce={pizza.sauce}
              cheese={pizza.cheese}
              toppings={pizza.toppings}
              popularity={pizza.popularity}
            />
          );
        })}
      </div>
    );
  }
}
