// const recipeIngredients = {
// 1: '1 Butter Lettuce',
// 2: '1-2 Spring Onions',
// 3: '2 cup Fresh Sweet Peas',
// 4: '2 Green Peppers',
// 5: '1 cup Cherry Tomatoes',
// 6: '5 tbsp Extra Virgin Olive Oil',
// 7: '1 tbsp Lemon Juice',
// 8: '2 tbsp Honey',
// 9: 'A few Fresh Mint Leaves'
// };

// const recipeDiet = {

// };

// const recipeDirection = {

// };

export const initialState = {
    recipesById: {
        1: {
            name: 'Mediterranean green salad',
            image: require('../assets/images/green.jpg'),
            description: 'This crispy Mediterranean green salad is easy to make & ready in 10 minutes. It’s perfect for outdoor entertaining and grill parties!',
            diet: 'vegiterian',
            type: 'salads',
            ingredients: '1 Butter Lettuce, 2 cups Fresh Sweet Peas, 1 cup Mangetout, 1-2 Spring Onions 2 Green Peppers 1½ cup Cherry Tomatoes, 5 tbsp Extra Virgin Olive Oil, 1 tbsp Lemon Juice, 2 tbsp Honey, A few Fresh Mint Leaves',
            instructions: 'Wash all the salad ingredients first. Cut lettuce into thin strips, shell peas and slice spring onions. Cut green peppers into thin strips (or dice). Half the tomatoes. Combine olive oil, lemon juice, honey and chopped mint leaves and pour over the salad right before serving.',
            likes: 0,
            dislikes: 0,
            recipeId: 1
        },
        2: {
            name: 'Smoked Salmon & Dill Deviled Eggs',
            image: require('../assets/images/appetizer.jpg'),
            description: 'Take this perennial party food and give it an upscale twist with smoked salmon. Your guests will be delighted with the results. —Jan Valdez, Chicago, Illinois',
            diet: 'vegiterian',
            type:'appetizers',
            ingredients: '8 hard-boiled large eggs, 1 package(3 ounces) smoked salmon or lox, finely chopped, 6 tablespoons sour cream,1 tablespoon chopped fresh dill or 1 teaspoon dill weed, 1 teaspoon cider vinegar, 1 teaspoon Dijon mustard, 1/4 teaspoon cayenne pepper',
            instructions: 'Cut eggs lengthwise in half. Remove yolks; set whites aside. In a small bowl, mash yolks. Add the remaining ingredients; mix well. Spoon into egg whites. Refrigerate until serving.',
            likes: 0,
            dislikes: 0,
            recipeId: 2
        }
    }
};