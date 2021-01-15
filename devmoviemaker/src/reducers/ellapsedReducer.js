const initialState = {
    ellapsed: 0,
};

export function ellapsedReducer(state = initialState, action) {
    switch (action.type) {
        case "ELLAPSED":
            return {...state, ellapsed: action.myEllapsed };

        default:
            return state;
    }
}