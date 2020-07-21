import React from "react";
import MenuItem from "./components/MenuItem";

import Post from "./components/Post";
import pizzaData from "./data/pizza.json";
import "./App.css";

const menuItems = ["Home", "About", "Trending Aticles", "Contact"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="row">
          <div class="col-lg-12 head-col">
            <p>One of three columns</p>
            <p>One of three columns</p>
          </div>
          <div class="col-lg col-sm post-column">
            <ol>
              {menuItems.map((title, i) => {
                console.log(title, i);
                return <MenuItem title={title} index={i + 1} />;
              })}
            </ol>
          </div>

          <div class="col-lg col-sm post-column">
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
          </div>

          <div class="col-lg col-sm post-column">One of three columns</div>
        </div>
      </header>
    </div>
  );
}

export default App;

// Step 1: Define an array of post objects (JSON)
// Step 2: Map over that array like the menu item
// Step 3: Make a post item component just like the menu item, make that look Be_you_ti_ful
// Step 4: Survive the next 9 weeks
