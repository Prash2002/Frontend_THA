const addTodo = (inp) => {
  return {
    type: "ADD_TODO",
    payload: inp,
  };
};
const delTodo = (index) => {
  return {
    type: "DEL_TODO",
    payload: index,
  };
};
const loadTodo = () => {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/todos/")
      .then((response) => response.json())
      .then((json) => {
        return dispatch({
          type: "LD_TODO",
          payload: json.slice(0, 5),
        });
      });
  };
};
export { addTodo, delTodo, loadTodo };
