const initialState = {
    word: [],
};

export function prompReducer(state = initialState, action) {
    switch (action.type) {
        case "ARRAY":
            return {...state, word: action.myWord };

        default:
            return state;
    }
}