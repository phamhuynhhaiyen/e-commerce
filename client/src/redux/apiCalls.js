import { loginFailure, loginStart, loginSuccess } from "./userRedux"
import { publishRequest } from '../requestMethod'

export const login = async (dispatch, user) => {
    dispatch(loginStart())
    try {
        const res = await publishRequest.post("/auth/login", user)
        dispatch(loginSuccess(res.data))
    } catch (error) {
        dispatch(loginFailure())
    }
}