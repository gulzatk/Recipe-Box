import constants from "../constants";
const { initialState, types } = constants;

const recipeListReducer = (state = initialState.recipes, action) => {
  console.log("recipe-list-reducer invoked");
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
      return state;
    default:
      return state;
  }
};

export default recipeListReducer;
