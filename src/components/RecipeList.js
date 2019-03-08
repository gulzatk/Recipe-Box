import React from 'react';
import Recipe from './Recipe';
import PropTypes from 'prop-types';

function RecipeList(props) {
    return (
<div>
    {Object.keys(props.recipeList).map(function(recipeId) {
        var recipe = props.recipeList[recipeId];
        return <Recipe name = {recipe.name}
            ingredients = {recipe.ingredients}
            direction = {recipe.direction}
            id = {recipeId}
            recipeId = {recipeId} />;
    })}
</div>

    );
}

RecipeList.propTypes = {
    recipeList: PropTypes.object
};

export default RecipeList;