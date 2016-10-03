import fetch from 'isomorphic-fetch'
/*
 * action 类型
 */
export const FETCH_SIDER_MENU_DATA_START = 'FETCH_SIDER_MENU_DATA_START';
export const FETCH_SIDER_MENU_DATA_FAIL = 'FETCH_SIDER_MENU_DATA_FAIL';
export const FETCH_SIDER_MENU_DATA_SUCCESS = 'FETCH_SIDER_MENU_DATA_SUCCESS';

/*
 * action 创建函数
 */
export function fetchSiderMenuDataFail(subreddit) {
    return {
        type: FETCH_SIDER_MENU_DATA_FAIL,
        subreddit
    }
}
export function fetchSiderMenuDataSuccess(subreddit, data) {
    return {
        type: FETCH_SIDER_MENU_DATA_SUCCESS,
        subreddit,
        data
    }
}
export function fetchSiderMenuDataStart(subreddit) {
    return {
        type: FETCH_SIDER_MENU_DATA_START,
        subreddit
    }
}

export function fetchSiderMenuData(subreddit) {
    return function (dispatch) {
        dispatch(fetchSiderMenuDataStart(subreddit))
        return fetch('/' + subreddit)
            .then(response => {
                if (response.status >= 400) {
                    dispatch(fetchSiderMenuDataFail(subreddit))
                }
                return response.json()
            })
            .then(data =>
                dispatch(fetchSiderMenuDataSuccess(subreddit, data))
            )
    }
}