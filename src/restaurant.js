module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}

function createRestaurant(restaurantName) {
  newRestaurant = {
    name: restaurantName,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return newRestaurant;
}

function addMenuItem(newRestaurant, newItem) {
  if (newItem.type === "breakfast" && newRestaurant.menus.breakfast.includes(newItem) === false) {
    newRestaurant.menus.breakfast.push(newItem)
  } else if (newItem.type === "lunch" && newRestaurant.menus.lunch.includes(newItem) === false) {
    newRestaurant.menus.lunch.push(newItem);
  } else if (newItem.type === "dinner" && newRestaurant.menus.dinner.includes(newItem) === false)
    newRestaurant.menus.dinner.push(newItem);
}

function removeMenuItem(newRestaurant, removeItem, type) {
  for (var i = 0; i < newRestaurant.menus[type].length; i++) {
    if (newRestaurant.menus[type][i].name === removeItem) {
      newRestaurant.menus[type].splice(i);
      return `No one is eating our ${removeItem} - it has been removed from the ${type} menu!`
    }
  }
  return `Sorry, we don't sell ${removeItem}, try adding a new recipe!`
}
