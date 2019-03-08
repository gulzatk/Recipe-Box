export default (state = {}, action) => {
    switch (action.type) {
        case 'ADD_RECIPE':
            const { name, ingredients, direction, likes, dislikes, id } = action;
            let newState = Object.assign({}, state, {
                [id]: {
                    name: name,
                    ingredients: ingredients,
                    direction: direction,
                    id: id,
                    likes: likes,
                    dislikes: dislikes
                }
            });
            return newState;
        default:
            return state;
    }
};
