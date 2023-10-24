export const MyReducer = (productList = [], action) => {
  const productId = action.payload;
  let itemToUpdate;
  switch (action.type) {
    case "increaseQty":
      itemToUpdate = productList.find((product) => product.id == productId);
      if (itemToUpdate != undefined) {
        itemToUpdate.qty += 1;
      }
      return [...productList];
    case "decreaseQty":
      itemToUpdate = productList.find((product) => product.id == productId);
      if (itemToUpdate != undefined) {
        itemToUpdate.qty -= 1;
      }
      return [...productList];
    default:
      return productList;
  }
};
