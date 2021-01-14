const initialState = {
    word: [],
};

export function prompReducer(state = initialState, action) {
    switch (action.type) {
        case "WORD":
            return {...state, word: action.word };
        default:
            return state;
    }
}