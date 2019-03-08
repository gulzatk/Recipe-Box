import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import RecipeList from './RecipeList';

function Recipe(props) {
    return (
        <div>
            <h3>{props.name}</h3>
            <p> {props.ingredients}</p>
            <p> {props.direction}
            <button onClick={() => props.changeLikes(props.id)}
            >👍</button>
            <span>Likes: {props.likes}</span>
            <button onClick={() => props.changeDisLikes(props.id)}>👎</button>
            <span>Dislikes:{props.dislikes}</span>
      </p>
        <hr />
        </div>
    );
}

Recipe.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string,
    ingredients: PropTypes.string,
    direction: PropTypes.string,
    likes: PropTypes.number,
    changeLikes: PropTypes.func,
    dislikes: PropTypes.number,
    changeDisLikes: PropTypes.func

};

export default Recipe;