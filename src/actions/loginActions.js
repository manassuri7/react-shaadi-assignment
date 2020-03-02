export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";


export function userLogin(){
    const action = {
        type: LOGIN
    }
    return action;
}

export function userLogout(){
    const action = {
        type: LOGOUT
    }
    return action;
}