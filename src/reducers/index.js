import selectedRecipeReducer from "./selected-recipe-reducer";
import recipeListReducer from "./recipe-list-reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  selectedRecipeId: selectedRecipeReducer,
  recipes: recipeListReducer
});

export default rootReducer;
