const initialState = {
  name: "",
  email: "",
};

const formReducer = (state = initialState, action) => {
  switch (action.type) {
    case "NAME":
      console.log(action.payload);
      return {
        ...state,
        name: action.payload,
      };
    case "EMAIL":
      return {
        ...state,
        email: action.payload,
      };
    default:
      return state;
  }
};

export default formReducer;
