import { LOGGED_IN, LOGGED_OUT } from "../constants"


export const onLoggedIn = () => {
    return {
        type: LOGGED_IN
    }
}

export const onLoggedOut = () => {
    return {
        type: LOGGED_OUT
    }
}