import constants from "../constants";
const { initialState, types } = constants;

const selectedRecipeReducer = (
  state = initialState.selectedRecipeId,
  action
) => {
  console.log("selected-recipe-reducer invoked");
  console.log("action type = " + action.type);
  switch (action.type) {
    case types.SELECT_RECIPE:
      console.log("new selected recipe id:");
      console.log(action.recipeId);
      return action.recipeId;
    default:
      return state;
  }
  return state;
};

export default selectedRecipeReducer;
