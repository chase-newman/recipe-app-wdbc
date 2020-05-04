import React, { Component } from 'react';
import './RecipeApp.css';
import Recipe from './Recipe';


class RecipeApp extends Component {
  
  render() {
    return (
    <div className="App">
      <Recipe 
        title="pasta" 
        ingredients={["flour", "water"]}
        instructions="Mix ingredients"
        img="https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg" />
    </div>
  );  
}
  

}

export default RecipeApp;
