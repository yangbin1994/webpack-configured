import {
    ADD_BUTTON,
} from '../actions/Action2'

export default function Reducer2(state = {
    buttons: []
}, action) {
    switch (action.type) {
        case ADD_BUTTON:
            return {
                ...state,
                buttons: [...state.buttons, 1]
            }
        default:
            return state
    }
}
