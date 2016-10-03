import {
    FETCH_SIDER_MENU_DATA_START,
    FETCH_SIDER_MENU_DATA_FAIL,
    FETCH_SIDER_MENU_DATA_SUCCESS
} from '../actions/Action1'

export default function Reducer1(state = {
    siderMenuDataLoading: false,
    siderMenuData: []
}, action) {
    switch (action.type) {
        case FETCH_SIDER_MENU_DATA_START:
            return {
                ...state,
                siderMenuDataLoading: true
            }
        case FETCH_SIDER_MENU_DATA_SUCCESS:
            return  {
                ...state,
                siderMenuData: action.data,
                siderMenuDataLoading: false
            }
        case FETCH_SIDER_MENU_DATA_FAIL:
            return  {
                ...state,
                siderMenuDataLoading: false
            }
        default:
            return state
    }
}
