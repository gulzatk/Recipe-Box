import constants from "../constants";
const { initialState, types } = constants;

const recipeListReducer = (state = initialState.recipesById, action) => {
  const {
    name,
    image,
    description,
    diet,
    mealType,
    ingredients,
    direction,
    likes,
    dislikes,
    id
  } = action;
  switch (action.type) {
    case types.ADD_RECIPE:
      state[id] = {
        name: name,
        description: description,
        image: image,
        diet: diet,
        type: mealType,
        ingredients: ingredients,
        direction: direction,
        id: id,
        likes: likes,
        dislikes: dislikes
      };
      console.log("New State:");
      console.log(state[id]);
      return state;
    default:
      console.log("Did not come here.");
      return state;
  }
};

export default recipeListReducer;
