/**
 * Given a list of recipes, return the number of vegetarian recipes in the list
 */
function countVeggies(recipes) {
  let count = 0;
  // code here
  for (let recipe of recipes) {
    if (recipe.isVegetarian) {
      count++
    }
  }

  return count
}

// array provided for debugging:
const recipes = [
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

// don't change below
export default countVeggies
