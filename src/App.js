import React from "react";
import MenuItem from "./components/MenuItem";

import Post from "./components/Post";
import pizzaData from "./data/pizza.json";
import "./App.css";

const menuItems = ["Home", "About", "Trending Aticles", "Contact"];

function App() {
  data.map(() => console.log("test"));
  return (
    <div className="App">
      <ol>
        {menuItems.map((title, i) => {
          console.log(title, i);
          return <MenuItem title={title} index={i + 1} />;
        })}
      </ol>

      {pizzaData.map((pizza) => {
        console.log(pizza);
        return (
          <Post
            name={pizza.name}
            popularity={pizza.popularity}
            description={pizza.cheese}
          />
        );
      })}

      <header className="App-header"></header>
    </div>
  );
}

export default App;

// Step 1: Define an array of post objects (JSON)
// Step 2: Map over that array like the menu item
// Step 3: Make a post item component just like the menu item, make that look Be_you_ti_ful
// Step 4: Survive the next 9 weeks
