import { confirmResetPassword, confirmSignUp, resetPassword, signIn, signOut, signUp } from 'aws-amplify/auth';
import { logout, setError, setLoading, setUser } from './userSlice';

export const handleUserLogin = ({ email, password }, router) => async (dispatch) => {
    try {
        dispatch(setLoading(true))
        const user = await signIn({ username: email, password })
        dispatch(setUser(user))
        router.push('/')
        return user
    } catch (error) {
        dispatch(setError(error.message))
        throw error
    }
}

export const handleUserSignup = ({ email, password }) => async (dispatch) => {
    try {
        dispatch(setLoading(true))
        const { user } = await signUp({
            username: email,
            password,
            attributes: {
                email,
            },
        })
        return user
    } catch (error) {
        dispatch(setError(error.message))
        throw error
    }
}

export const handleConfirmSignup = ({ email, code }) => async (dispatch) => {
    console.log("handleConfirmSignup", email, code)
    try {
        dispatch(setLoading(true))
        await confirmSignUp({ username: email, confirmationCode: code })
        return true
    } catch (error) {
        console.log("error", error)
        dispatch(setError(error.message))
        throw error
    }
}

export const handleForgotPassword = ({ email }) => async (dispatch) => {
    try {
        dispatch(setLoading(true))
        await resetPassword({ username: email })
        return true
    } catch (error) {
        dispatch(setError(error.message))
        throw error
    }
}

export const handleConfirmResetPassword = ({ email, code, newPassword }) => async (dispatch) => {
    try {
        dispatch(setLoading(true))
        await confirmResetPassword({
            username: email,
            confirmationCode: code,
            newPassword,
        })
        return true
    } catch (error) {
        dispatch(setError(error.message))
        throw error
    }
}

export const handleUserLogout = () => async (dispatch) => {
    try {
        dispatch(setLoading(true))
        await signOut()
        dispatch(logout())
    } catch (error) {
        dispatch(setError(error.message))
        throw error
    }
}

export const checkAuthState = () => async (dispatch) => {
    try {
        dispatch(setLoading(true))
        const user = await currentAuthenticatedUser()
        dispatch(setUser(user))
        return user
    } catch (error) {
        dispatch(logout())
        return null
    }
}