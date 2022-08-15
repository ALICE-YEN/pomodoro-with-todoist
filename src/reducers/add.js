const initialState = [];
const addReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      let newState = [
        ...state,
        {
          id: state.length + 1,
          description: action.payload,
          done: false,
        },
      ];
      return newState;
    default:
      return state;
  }
};

export default addReducer;
