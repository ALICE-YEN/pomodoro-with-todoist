export const addTodo = (description) => {
  return {
    type: 'ADD',
    payload: description,
  };
};

export const deleteTodo = (id) => {
  return {
    type: 'DELETE',
    payload: id,
  };
};

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE',
    payload: id,
  };
};

export const modifyTodo = (props) => {
  return {
    type: 'MODIFY',
    payload: props,
  };
};
