import React, { Component } from 'react';
import Recipe from './Recipe';
import './RecipeList.css';
import PropTypes from 'prop-types';

class RecipeList extends Component {
    static defaultProps = {
        recipes: [
        {title: "pasta", ingredients: ["flour", "water"], instructions: "Mix ingredients", img: "https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg"},
        {title: "milkshake", ingredients: ["2 Scoops of Ice Cream", "8 ounces of milk"], instructions: "Combine ice cream and milk. Blend until creamy", img: "https://www.thespruceeats.com/thmb/dqgcU5wT8jqhnb-QyomNqHxonqE=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/chocolatemilkshake-5c6e0b9e46e0fb0001e6e84d.jpg"},
        {title: "avocado toast", ingredients: ["2 slices of bread", "1 avocado", "1 tablespoon olive oil", "1 pinch of salt", "pepper"], instructions: "Toast bread. Slice avocado and spread on bread. Add salt, oil and pepper to taste", img: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2Fmedium_2x%2Fpublic%2Fimage%2F2018%2F07%2Fmain%2F1807w-avocado-toast-recipe.jpg%3Fitok%3D_dDi7ZQQ"} 
      ]
    }
    
    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object)
    }
    
    render() {
        const recipes = this.props.recipes.map((r,index) => {
          return   <Recipe key={index} {...r} />
        })
        return (
            <div>
              {recipes}
            </div>
        );
    };
};

export default RecipeList;
