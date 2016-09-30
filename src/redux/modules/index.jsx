const OPEN = 'Open';

const initialState = {
    OPEN: false
};
// reducers
export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        case OPEN:
            return {
        ...state,
                loading: true
            };
        default:
            return state;
    }
}
// actions
export function login(name) {
    return {
        types: OPEN
    };
}