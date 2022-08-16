const initialState = [];
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD':
      let newAddState = [
        ...state,
        {
          id: state.length + 1,
          description: action.payload,
          done: false,
        },
      ];
      return newAddState;
    case 'DELETE':
      let newDeleteState = [...state].filter(
        (item) => item.id !== action.payload
      );
      return newDeleteState;
    case 'TOGGLE':
      let newCompleteState = [...state];
      for (let i = 0; i < newCompleteState.length; i++) {
        if (newCompleteState[i]['id'] === action.payload) {
          newCompleteState[i]['done'] = !newCompleteState[i]['done'];
        }
      }
      return newCompleteState;
    case 'MODIFY':
      const { id, content } = action.payload;
      let newModifyState = [...state];
      for (let i = 0; i < newModifyState.length; i++) {
        if (newModifyState[i]['id'] === id) {
          newModifyState[i]['description'] = content;
        }
      }
      return newModifyState;
    default:
      return state;
  }
};

export default todoReducer;
