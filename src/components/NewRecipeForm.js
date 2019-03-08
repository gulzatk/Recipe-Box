import React from 'react';
import { v4 } from 'uuid';
import { connect } from 'react-redux';

function NewRecipeForm (props) {
    console.log(props);
    let _name = null;
    let _ingredients = null;
    let _direction = null;


    function handleNewRecipeFormSubmission(event) {
        const { dispatch } = props;
        event.preventDefault();
        const action = {
            type: 'ADD_RECIPE',
            name: _name.value,
            ingredients: _ingredients.value,
            direction: _direction.value,
            likes: 0,
            dislikes: 0,
            id: v4()
        };
        dispatch(action);
        _name.value = '';
        _ingredients.value = '';
        _direction.value = '';
    }

    return (
        <div>
            <form onSubmit={handleNewRecipeFormSubmission}>
                <h4>Add ne recipe to the list</h4>
                <input type="text"
                    id="name"
                    placeholder="recipe name"
                    ref={input => {
                        _name = input;
                    }}
                />
                <textarea
                    id="ingredients"
                    placeholder="ingredients..."
                    ref={textarea => {
                        _ingredients = textarea;
                    }}
                />
                <textarea
                    id="direction"
                    placeholder="direction..."
                    ref={textarea => {
                        _direction = textarea;
                    }}
                />
                <button type="submit">Add!</button>
            </form>
        </div>
    );
}


export default connect()(NewRecipeForm);