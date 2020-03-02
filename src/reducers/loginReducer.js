import { LOGIN, LOGOUT } from "../actions/loginActions";

const initialState = {
    login: false
}

export default function loginActions(state = {...initialState}, action){
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                login: true
            }
        case LOGOUT:
            return {
                ...initialState
            }
        default:
            return state;
    }
    return state;
}