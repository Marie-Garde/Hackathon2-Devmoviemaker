const initialState = {
  page: "home",
};

export function menuReducer(state = initialState, action) {
  switch (action.type) {
    case "HOME":
      return { page: (state.page = "home") };
    case "ADVICES":
      return { page: (state.page = "advices") };
    case "TIME":
      return { page: (state.page = "time") };
    case "RECORD":
      return { page: (state.page = "record") };
    default:
      return state;
  }
}
