/**
 * Given a recipeBook containing recipes, returns the total number of servings in the book
 */


function countServings(recipeBook) {
  let servings = 0;

  // code here
  console.log(recipeBook.recipes)
  for (let recipe of recipeBook.recipes) {
    servings += recipe.servings
  }
 
  return servings
}

// we've provided a sample object for debugging:
const recipeBook = {
  title: 'My Recipe Book',
  recipes: [
    {
      name: 'Spaghetti Bolognese',
      ingredients: ['spaghetti', 'beef', 'tomato sauce'],
      servings: 4,
      isVegetarian: false
    },

    {
      name: 'Vegetable Stir Fry',
      ingredients: ['broccoli', 'carrots', 'bell peppers', 'soy sauce'],
      servings: 2,
      isVegetarian: true
    }
  ]
}

// don't change below
export default countServings
