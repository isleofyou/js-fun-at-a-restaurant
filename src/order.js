function takeOrder(newOrder, deliveryOrders) {
  if (deliveryOrders.length < 3) {
    deliveryOrders.push(newOrder);
  }
}

function refundOrder(refundNumber, deliveryOrders) {
  for (i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].orderNumber === refundNumber) {
      deliveryOrders.splice([i], 1);
    }
  }
}

function listItems(deliveryOrders) {
  items = [];
  for (var i = 0; i < deliveryOrders.length; i++) {
    items.push(deliveryOrders[i].item);
  }
  return items.join(', ');
}

function searchOrder(deliveryOrders, checkItem) {
  for (i = 0; i < deliveryOrders.length; i++) {
    if (deliveryOrders[i].item.includes(checkItem)) {
      return true;
    }
  }
  return false;
}
module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
