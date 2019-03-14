import React from "react";
import Recipe from "./Recipe";
import PropTypes from "prop-types";
import { connect, store } from "react-redux";
import { SELECT_RECIPE } from "../constants/ActionTypes";

const RecipeList = props => {
  function navigateToDetails(recipeId) {
    const { dispatch } = props;
    const action = {
      type: SELECT_RECIPE,
      recipeId: recipeId
    };

    dispatch(action);
    window.location.href = "#/recipeDetails";
  }

  let recipeList = props.recipeList;
  return (
    <div>
      <br />
      <div
        className="uk-child-width-expand@s uk-text-center uk-grid-match"
        uk-grid="true"
      >
        {Object.keys(recipeList).map(recipeId => {
          let recipe = recipeList[recipeId];
          return (
            <div key={recipeId}>
              <div className="uk-card uk-card-default uk-card-body">
                <h3>{recipe.name}</h3>
                <img src={recipe.image} />
                <p>{recipe.description}</p>
                <button
                  className="uk-button uk-button-default"
                  onClick={() => navigateToDetails(recipeId)}
                >
                  Details
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

RecipeList.propTypes = {
  recipeList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    recipeList: state.recipes
  };
};

export default connect(mapStateToProps)(RecipeList);
