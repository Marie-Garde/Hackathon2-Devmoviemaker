const initialState = {
    splitTime: [],
};

export function splitTimeReducer(state = initialState, action) {
    switch (action.type) {
        case "SPLITTIME":
            return {...state, splitTime: action.mySplitTime };

        default:
            return state;
    }
}