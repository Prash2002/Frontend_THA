const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DEL_TODO":
      return state.filter((item, index) => {
        return index !== action.payload;
      });
    case "LD_TODO":
      action.payload.map((todo) => {
        return state.push(todo.title);
      });
      console.log(state);
      // return state; --> doesn't show up in UI, but prints in the console
      return [...state]; // shows up in UI
    default:
      return state;
  }
};

export { todoReducer };
