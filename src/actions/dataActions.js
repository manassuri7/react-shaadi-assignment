export const ADD_ITEM = "ADD_ITEM";
export const CLEAR = "CLEAR";
export const CURRENT_ITEM = "CURRENT_ITEM";

export function addItem(number){

    const action = {
        type: ADD_ITEM,
        payload: {number}
    }

    return action;

}

export function currentItem(number){

    const action = {
        type: CURRENT_ITEM,
        payload: {number}
    }

    return action;

}

export function clear(){
    const action = {
        type: CLEAR
    }
    return action;
}