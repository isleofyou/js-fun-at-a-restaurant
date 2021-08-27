function nameMenuItem(newFood) {
  return menuItemName =`Delicious ${newFood}`;
}

function createMenuItem(menuItemName,price,type) {
var menuItem = {
    name: menuItemName,
    price: price,
    type: type
};
  return menuItem;
}

function addIngredients(ingredient, ingredients) {
  if (ingredients.includes(ingredient)) {
    return ingredients;
  } else {
  return ingredients.push(ingredient);
  }
};

function formatPrice(initialPrice){
  formattedPrice = `$${initialPrice}`;
  return formattedPrice;
}

function decreasePrice (initialPrice){
  decreasedPrice = initialPrice - initialPrice/10;
  return decreasedPrice;
}

function createRecipe (title,ingredients,type){
  recipe = {title: title,
            ingredients: ingredients,
            type: type};
  return recipe;
}
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
