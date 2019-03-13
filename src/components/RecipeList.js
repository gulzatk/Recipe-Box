import React from "react";
import Recipe from "./Recipe";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const RecipeList = ({ recipeList }) => {
  return (
    <div>
      <h1>List of all Recipes</h1>
      <hr />
      {Object.keys(recipeList).map(recipeId => {
        let recipe = recipeList[recipeId];
        //let imageName = require(recipe.image);
        return (
          <li key={recipeId}>
            <h3>{recipe.name}</h3>
            <img src={recipe.image} />
            <p>{recipe.description}</p>
          </li>
        );
      })}
    </div>
  );
};

RecipeList.propTypes = {
  recipeList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    recipeList: state
  };
};

export default connect(mapStateToProps)(RecipeList);
