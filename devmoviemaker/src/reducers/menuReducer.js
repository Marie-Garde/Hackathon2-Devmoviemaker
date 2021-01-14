const initialState = {
  page: "home",
};

export function menuReducer(state = initialState, action) {
  switch (action.type) {
    case "HOME":
      return { ...state, page: "home" };
    case "ADVICES":
      return { ...state, page: "advices" };
    case "TIME":
      return { ...state, page: "time" };
    case "RECORD":
      return { ...state, page: "record" };
    default:
      return state;
  }
}
