export const addTodo = (description) => {
  return {
    type: 'ADD',
    payload: description,
  };
};
