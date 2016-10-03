import fetch from 'isomorphic-fetch'
/*
 * action 类型
 */
export const ADD_BUTTON = 'ADD_BUTTON';

/*
 * action 创建函数
 */
export function addButton () {
    return {
        type: ADD_BUTTON
    }
}
