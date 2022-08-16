const initialState = [];
const deleteReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'DELETE':
      let newState = [...state];
      //   return newState.filter((item) => item.id !== action.payload);
      return state;
    default:
      return state;
  }
};

export default deleteReducer;
