const intitialState = [];
export const cartReducer = (state = intitialState, action) => {
  if (action.type === "ADD_TO_CART")
    if (action.payload.counter == 1) {
        action.payload.counter++;
        console.log("payload >",action.payload.counter);
      return state.concat(action.payload);
    } else {
        console.log("Payload Down Bro >",action.payload.counter);
        action.payload.counter++;
        return state.concat(action.payload); 
    }
  return state;
};
