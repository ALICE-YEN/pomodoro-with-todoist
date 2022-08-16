export const addTodo = (description) => {
  return {
    type: 'ADD',
    payload: description,
  };
};

export const deleteTodo = () => {
  return {
    type: 'DELETE',
  };
};
