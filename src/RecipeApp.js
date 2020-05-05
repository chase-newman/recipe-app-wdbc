import React, { Component } from 'react';
import './RecipeApp.css';
import Recipe from './Recipe';


class RecipeApp extends Component {
  state = {
    recipes: [
        {title: "pasta", ingredients: ["flour", "water"], instructions: "Mix ingredients", img: "https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg"},
        {title: "milkshake", ingredients: ["2 Scoops of Ice Cream", "8 ounces of milk"], instructions: "Combine ice cream and milk. Blend until creamy", img: "https://www.thespruceeats.com/thmb/dqgcU5wT8jqhnb-QyomNqHxonqE=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/chocolatemilkshake-5c6e0b9e46e0fb0001e6e84d.jpg"},
        {title: "avocado toast", ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"], instructions: "Toast bread. Slice avocado and spread on bread. Add salt, oil and pepper to taste", img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2018%2F07%2Fmain%2F1807w-avocado-toast-recipe.jpg%3Fitok%3D_dDi7ZQQ"} 
      ]
  }
  
  
  render() {
    const recipes = this.state.recipes.map((recipe, index) => {
      return <Recipe 
            title={recipe.title} 
            ingredients={recipe.ingredients} 
            instructions={recipe.instructions} 
            img={recipe.img}/>
    })
    
    return (
    <div className="App">
      {recipes}
      {/*<Recipe 
        title="pasta" 
        ingredients={["flour", "water"]}
        instructions="Mix ingredients"
        img="https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg" />
      <Recipe
        title="Milkshake" 
        ingredients={["2 Sccoops of ice cream", "8 ounces of milk"]}
        instructions="Combine ice cream and milk. Blend until creamy"
        />*/}
    </div>
  );  
}
  

}

export default RecipeApp;
