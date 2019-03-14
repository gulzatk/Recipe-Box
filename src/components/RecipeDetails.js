import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

function RecipeDetails({ selectedRecipe }) {
  //   console.log(selectedRecipe);
  return (
    <div>
      <div className="uk-section uk-section-default">
        <div className="uk-container">
          <h2>{selectedRecipe.name}</h2>
          <img src={selectedRecipe.image} />
          <p>{selectedRecipe.description}</p>
        </div>
      </div>
    </div>
  );
}

RecipeDetails.propTypes = {
  selectedRecipe: PropTypes.object
};

const mapStateToProps = state => {
  return {
    selectedRecipe: state.recipes[state.selectedRecipeId]
  };
};

export default connect(mapStateToProps)(RecipeDetails);
