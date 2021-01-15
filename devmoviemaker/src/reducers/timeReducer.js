const initialState = {
  time: 0,
};

export function timeReducer(state = initialState, action) {
  switch (action.type) {
    case "TIME":
      return { ...state, time: action.myTime };
    default:
      return state;
  }
}
