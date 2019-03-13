import React from "react";
import { v4 } from "uuid";
import { connect } from "react-redux";
// import UIkit from 'uikit';
import "./styles/Form.css";
import { ADD_RECIPE } from "../constants/ActionTypes";

// UIkit.formCustom( );

function NewRecipeForm(props) {
  console.log(props);
  let _name = null;
  let _image = null;
  let _description = null;
  let _mealType = null;
  let _diet = null;

  function handleNewRecipeFormSubmission(event) {
    const { dispatch } = props;
    event.preventDefault();
    const action = {
      type: ADD_RECIPE,
      name: _name.value,
      image: _image.value,
      description: _description.value,
      mealType: _mealType.value,
      diet: _diet.value,
      likes: 0,
      dislikes: 0,
      id: v4()
    };

    dispatch(action);

    _name.value = "";
    _image.value = "";
    _description.value = "";
    _mealType.value = "";
    _diet.value = "";
  }

  return (
    <div>
      <form className="formContainer" onSubmit={handleNewRecipeFormSubmission}>
        <h4>Add new recipe to the list</h4>
        <label>Recipe Name </label>
        <input
          type="text"
          id="name"
          placeholder="recipe name"
          ref={input => {
            _name = input;
          }}
        />
        <br />
        <br />
        <label>Image Url</label>
        <input
          type="text"
          id="image"
          placeholder="image url..."
          ref={input => {
            _image = input;
          }}
        />
        <br />
        <br />
        <label>Description: </label>
        <textarea
          id="description"
          placeholder="description..."
          ref={textarea => {
            _description = textarea;
          }}
        />
        <br />
        <br />
        <label>Type of Meal: </label>
        <input
          id="meal_type"
          placeholder="meal type..."
          ref={input => {
            _mealType = input;
          }}
        />
        <br />
        <br />
        <label>Diet: </label>
        <input
          id="diet"
          placeholder="diet..."
          ref={input => {
            _diet = input;
          }}
        />
        <br />
        <br />
        <button className="button" type="submit">
          Add!
        </button>
      </form>
    </div>
  );
}

export default connect()(NewRecipeForm);
