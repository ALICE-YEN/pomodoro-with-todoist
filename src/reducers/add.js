const initialState = [];
const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      let newState = [...state, { description: action.payload }];
      return newState;
    default:
      return state;
  }
};

export default addReducer;
